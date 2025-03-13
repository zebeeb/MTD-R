
/**
 * Core authentication types for the application
 * Provides TypeScript definitions for user authentication data
 */

// Basic user profile information returned by Supabase
export interface UserProfile {
  id: string;
  email?: string;
  created_at?: string;
  updated_at?: string;
}

// Authentication state that will be stored in our Zustand store
export interface AuthState {
  user: UserProfile | null;
  session: any | null; // Using 'any' for session temporarily for simplicity
  isLoading: boolean;
  error: string | null;
}

// Authentication action types for updating the auth state
export interface AuthActions {
  setUser: (user: UserProfile | null) => void;
  setSession: (session: any | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
  reset: () => void;
}
