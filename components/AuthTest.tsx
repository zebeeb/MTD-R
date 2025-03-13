
/**
 * Simple authentication test component
 * Displays a login form and user info for testing purposes
 */
import React, { useEffect } from 'react';
import { Text, Button, YStack, XStack, Card } from 'tamagui';
import { AuthForm } from './ui/AuthForm';
import { useAuth } from '../hooks/useAuth';

export function AuthTest() {
  const { user, isAuthenticated, logout, initAuth, isLoading } = useAuth();

  // Initialize auth on component mount
  useEffect(() => {
    initAuth();
  }, []);

  if (isLoading) {
    return (
      <YStack padding="$4" alignItems="center" space="$4">
        <Text>Loading authentication state...</Text>
      </YStack>
    );
  }

  return (
    <YStack padding="$4" alignItems="center" space="$4" width="100%">
      <Text fontSize="$7" fontWeight="bold">Authentication Test</Text>
      
      {isAuthenticated ? (
        <Card padding="$4" width="100%" maxWidth={400}>
          <YStack space="$4">
            <Text fontSize="$5" fontWeight="bold">
              Welcome, {user?.email || 'User'}!
            </Text>
            
            <Text>You are successfully authenticated!</Text>
            
            <Text fontSize="$3" fontWeight="bold">User ID:</Text>
            <Text selectable>{user?.id}</Text>
            
            <Button
              themeInverse
              onPress={logout}
              marginTop="$4"
            >
              Log Out
            </Button>
          </YStack>
        </Card>
      ) : (
        <AuthForm />
      )}
    </YStack>
  );
}
