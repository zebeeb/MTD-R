
/**
 * Supabase Client Utility
 * 
 * This utility provides a centralized way to access the Supabase client
 * with proper configuration and error handling.
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { env } from './environment';

// Initialize the Supabase client with environment variables
const supabaseUrl = env.SUPABASE_URL || '';
const supabaseAnonKey = env.SUPABASE_ANON_KEY || '';

// Validate that we have the required configuration
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase configuration. Please check your environment variables.');
}

// Create and export the Supabase client instance
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

/**
 * Helper function to handle Supabase errors consistently
 * @param error Error from Supabase operation
 * @returns A standardized error object
 */
export const handleSupabaseError = (error: unknown): Error => {
  // Log error for debugging
  console.error('Supabase operation failed:', error);
  
  // Return a standardized error
  if (error instanceof Error) {
    return error;
  }
  
  return new Error('An unknown error occurred with the database operation');
};
