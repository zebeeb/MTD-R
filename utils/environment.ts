
/**
 * Environment Configuration Utility
 * 
 * This utility provides a centralized way to access environment variables
 * with proper typing and default values for local development.
 */

import Constants from 'expo-constants';
import { EnvironmentVariables } from '../types/env.types';

/**
 * Get environment variables with fallback defaults
 * This approach ensures we never have undefined values
 */
export const getEnvironment = (): EnvironmentVariables => {
  // Access extra field from Expo Constants
  const expoConstants = Constants.expoConfig?.extra as
    | EnvironmentVariables
    | undefined;

  return {
    // API Configuration
    API_URL: expoConstants?.API_URL || 'https://api.example.com',
    
    // Supabase Configuration
    SUPABASE_URL: expoConstants?.SUPABASE_URL || 'https://gdhqjnhfhsfrahznlxzg.supabase.co',
    SUPABASE_ANON_KEY: expoConstants?.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkaHFqbmhmaHNmcmFoem5seHpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0NDI5NjksImV4cCI6MjA1NzAxODk2OX0.jHH3rJfaRrVd8xI4obofytC1VGSs3PwR2zOklREadzs',
    
    // Feature Flags
    ENABLE_AI_FEATURES: expoConstants?.ENABLE_AI_FEATURES || false,
    
    // App Settings
    APP_NAME: expoConstants?.APP_NAME || 'MuslimTodo',
  };
};

// Export a singleton instance for easy imports
export const env = getEnvironment();
