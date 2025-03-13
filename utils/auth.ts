
/**
 * Authentication utility functions
 * Centralizes auth logic to make it easier to maintain and update
 */
import { supabase } from './supabase';

/**
 * Sign in with email and password
 */
export async function signInWithEmail(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    return { 
      data: null, 
      error: error.message || 'Failed to sign in' 
    };
  }
}

/**
 * Sign up with email and password
 */
export async function signUpWithEmail(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    
    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    return { 
      data: null, 
      error: error.message || 'Failed to sign up' 
    };
  }
}

/**
 * Sign out the current user
 */
export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { error: null };
  } catch (error: any) {
    return { 
      error: error.message || 'Failed to sign out' 
    };
  }
}

/**
 * Get the current session
 */
export async function getCurrentSession() {
  try {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    return { 
      data: null, 
      error: error.message || 'Failed to get current session' 
    };
  }
}

/**
 * Get the current user
 */
export async function getCurrentUser() {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error) throw error;
    if (!session) return { user: null, error: null };
    
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    
    if (userError) throw userError;
    return { user, error: null };
  } catch (error: any) {
    return { 
      user: null, 
      error: error.message || 'Failed to get current user' 
    };
  }
}
