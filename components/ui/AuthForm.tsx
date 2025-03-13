
/**
 * Authentication form component for login and signup
 */
import React, { useState } from 'react';
import { Text, Input, Button, XStack, YStack, Stack, Form } from 'tamagui';
import { useAuth } from '../../hooks/useAuth';

type AuthMode = 'login' | 'signup';

export function AuthForm() {
  // State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mode, setMode] = useState<AuthMode>('login');
  const [validationError, setValidationError] = useState<string | null>(null);
  
  // Auth state and methods
  const { login, register, isLoading, error } = useAuth();

  // Toggle between login and signup
  const toggleMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
    setValidationError(null);
  };

  // Basic validation
  const validate = (): boolean => {
    // Clear previous validation errors
    setValidationError(null);
    
    // Check email format
    if (!email || !email.includes('@')) {
      setValidationError('Please enter a valid email address');
      return false;
    }
    
    // Password requirements
    if (!password || password.length < 6) {
      setValidationError('Password must be at least 6 characters');
      return false;
    }
    
    // Confirm password match for signup
    if (mode === 'signup' && password !== confirmPassword) {
      setValidationError('Passwords do not match');
      return false;
    }
    
    return true;
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!validate()) return;
    
    if (mode === 'login') {
      await login(email, password);
    } else {
      await register(email, password);
    }
  };

  return (
    <YStack space="$4" padding="$4" width="100%" maxWidth={400}>
      <Text fontSize="$6" fontWeight="bold">
        {mode === 'login' ? 'Sign In' : 'Create Account'}
      </Text>
      
      <Form onSubmit={handleSubmit}>
        <YStack space="$4">
          <Input
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          
          <Input
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          
          {mode === 'signup' && (
            <Input
              placeholder="Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          )}
          
          {(validationError || error) && (
            <Text color="$red10" fontSize="$2">
              {validationError || error}
            </Text>
          )}
          
          <Button 
            themeInverse
            size="$4"
            onPress={handleSubmit}
            disabled={isLoading}
          >
            {isLoading 
              ? (mode === 'login' ? 'Signing In...' : 'Creating Account...') 
              : (mode === 'login' ? 'Sign In' : 'Create Account')}
          </Button>
          
          <XStack justifyContent="center" space="$2">
            <Text>
              {mode === 'login' 
                ? "Don't have an account?" 
                : "Already have an account?"}
            </Text>
            <Text 
              color="$blue10" 
              onPress={toggleMode}
              fontWeight="bold"
            >
              {mode === 'login' ? 'Sign Up' : 'Sign In'}
            </Text>
          </XStack>
        </YStack>
      </Form>
    </YStack>
  );
}
