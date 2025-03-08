
import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, ScrollView } from 'react-native';
import { supabase } from '../utils/supabase';
import { useGetLists } from '../utils/supabaseQueries';

/**
 * Simple test component to verify Supabase connection
 * This is for testing purposes only and should be removed in production
 */
export const SupabaseTest = () => {
  const [connected, setConnected] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Temporary user ID for testing - in real app this would come from auth
  const testUserId = '12345';
  
  // Use our React Query hook to test fetching lists
  const { 
    data: lists,
    isLoading: listsLoading,
    isError: listsError,
    refetch: refetchLists
  } = useGetLists(testUserId);

  const testConnection = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Simple ping test to Supabase
      const { data, error } = await supabase.from('lists').select('count', { count: 'exact' });
      
      if (error) {
        throw error;
      }
      
      setConnected(true);
    } catch (err) {
      setConnected(false);
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      console.error('Supabase connection test failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>
        Supabase Connection Test
      </Text>
      
      <Button 
        title="Test Connection" 
        onPress={testConnection} 
        disabled={loading}
      />
      
      {loading && (
        <View style={{ marginTop: 20, alignItems: 'center' }}>
          <ActivityIndicator size="large" />
          <Text>Testing connection...</Text>
        </View>
      )}
      
      {connected !== null && !loading && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ 
            fontSize: 16, 
            fontWeight: 'bold',
            color: connected ? 'green' : 'red'
          }}>
            {connected ? 'Connection Successful! ✅' : 'Connection Failed ❌'}
          </Text>
          
          {error && (
            <Text style={{ color: 'red', marginTop: 10 }}>
              Error: {error}
            </Text>
          )}
        </View>
      )}
      
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>
          Test React Query Integration:
        </Text>
        
        <Button 
          title="Fetch Lists" 
          onPress={() => refetchLists()} 
          disabled={listsLoading}
        />
        
        {listsLoading && (
          <ActivityIndicator style={{ marginTop: 10 }} />
        )}
        
        {listsError && (
          <Text style={{ color: 'red', marginTop: 10 }}>
            Error fetching lists
          </Text>
        )}
        
        {lists && lists.length > 0 ? (
          <View style={{ marginTop: 10 }}>
            <Text>Lists found: {lists.length}</Text>
            {lists.map(list => (
              <View key={list.id} style={{ 
                marginTop: 5, 
                padding: 10, 
                backgroundColor: '#f0f0f0', 
                borderRadius: 5 
              }}>
                <Text>Name: {list.name}</Text>
                <Text>Color: {list.color}</Text>
              </View>
            ))}
          </View>
        ) : lists && (
          <Text style={{ marginTop: 10 }}>
            No lists found. This is expected for a new database.
          </Text>
        )}
      </View>
    </ScrollView>
  );
};
