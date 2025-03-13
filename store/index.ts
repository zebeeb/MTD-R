// Main store exports file
// This file exports all stores and types for easy imports throughout the app

import { create } from 'zustand';
import { AppState, createTaskActions } from './taskStore';
import { AuthState, AuthActions, UserProfile } from '../types/auth.types';

// Extended AppState interface to include auth state
export interface ExtendedAppState extends AppState, AuthState, AuthActions {}

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

// Create the base store with auth state
const useStore = create<ExtendedAppState>((set) => ({
  // Task state
  tasks: [],
  // Auth state
  user: null,
  session: null,
  isLoading: false,
  error: null,
  // Add task actions
  ...createTaskActions(set),
  // Add auth actions
  ...createAuthActions(set),
}));

export default useStore;

export * from './taskStore';
export * from './types';
export * from './selectors';