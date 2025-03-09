
import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';
import { Text, View } from 'tamagui';

// This is a simple test component to verify Supabase connection
// It will be removed after testing is complete
export function SupabaseConnectionTest() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Testing Supabase connection...');

  useEffect(() => {
    async function testConnection() {
      try {
        // A simple query to test the connection
        const { data, error } = await supabase.from('_dummy_query').select('*').limit(1);
        
        // This query is expected to fail with a "relation does not exist" error
        // which indicates the connection is working but the table doesn't exist
        if (error && error.message.includes('relation') && error.code === '42P01') {
          setStatus('success');
          setMessage('✅ Supabase connection successful!');
        } else if (error) {
          setStatus('error');
          setMessage(`❌ Connection error: ${error.message}`);
        } else {
          setStatus('success');
          setMessage('✅ Supabase connection successful!');
        }
      } catch (err) {
        setStatus('error');
        setMessage(`❌ Unexpected error: ${err instanceof Error ? err.message : String(err)}`);
      }
    }

    testConnection();
  }, []);

  return (
    <View padding="$4" marginVertical="$4">
      <Text
        fontSize="$5"
        fontWeight="bold"
        color={status === 'loading' ? '$yellow10' : status === 'success' ? '$green10' : '$red10'}
      >
        Supabase Connection Test
      </Text>
      <Text marginTop="$2">{message}</Text>
    </View>
  );
}
