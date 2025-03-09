/**
 * Types for environment variables
 * This file defines the structure of our environment variables
 * to ensure type safety throughout the application
 */

export type EnvironmentVariables = {
  // API keys and endpoints
  API_URL?: string;
  SUPABASE_URL?: string;
  SUPABASE_ANON_KEY?: string;

  // Feature flags
  ENABLE_AI_FEATURES?: boolean;

  // App settings
  APP_NAME?: string;
};