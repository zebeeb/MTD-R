
import React from 'react';
import { View, Text } from 'react-native';
import { env } from '../utils/environment';

/**
 * A simple component to display environment variables
 * This is for testing purposes only and should be removed in production
 */
export const EnvironmentDisplay = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text>Environment Variables:</Text>
      <Text>API URL: {env.API_URL}</Text>
      <Text>App Name: {env.APP_NAME}</Text>
      <Text>AI Features Enabled: {env.ENABLE_AI_FEATURES ? 'Yes' : 'No'}</Text>
    </View>
  );
};
