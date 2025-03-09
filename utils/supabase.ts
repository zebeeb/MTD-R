
// This file creates a reusable Supabase client connection
import { createClient } from '@supabase/supabase-js';
import { getEnvironmentVariable } from './environment';

// Get Supabase credentials from environment variables
const supabaseUrl = getEnvironmentVariable('SUPABASE_URL');
const supabaseAnonKey = getEnvironmentVariable('SUPABASE_ANON_KEY');

// Validate that credentials exist
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase credentials. Please check your .env file.');
}

// Create a single instance of the Supabase client to be used throughout the app
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
