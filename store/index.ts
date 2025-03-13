
// Main store exports file
// This file exports all stores and types for easy imports throughout the app

import { create } from 'zustand';
import { AuthState, AuthActions, UserProfile } from '../types/auth.types';

// Create a simplified AppState interface with just auth properties
export interface AppState extends AuthState, AuthActions {}

// Create auth actions
const createAuthActions = (set: any): AuthActions => ({
  setUser: (user: UserProfile | null) => set({ user }),
  setSession: (session: any | null) => set({ session }),
  setLoading: (isLoading: boolean) => set({ isLoading }),
  setError: (error: string | null) => set({ error }),
  clearError: () => set({ error: null }),
  reset: () => set({ 
    user: null, 
    session: null, 
    isLoading: false, 
    error: null 
  }),
});

// Create the base store with auth state only (no task state)
const useStore = create<AppState>((set) => ({
  // Auth state
  user: null,
  session: null,
  isLoading: false,
  error: null,
  // Add auth actions only
  ...createAuthActions(set),
}));

export default useStore;

// Only export necessary types, not task-related exports
export * from './types';
