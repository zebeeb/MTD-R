
/**
 * Auth hook for components to easily access auth functionality
 */
import { useEffect } from 'react';
import useStore from '../store';
import { 
  signInWithEmail, 
  signUpWithEmail, 
  signOut, 
  getCurrentSession,
  getCurrentUser
} from '../utils/auth';

export function useAuth() {
  // Select auth state from store
  const user = useStore((state) => state.user);
  const session = useStore((state) => state.session);
  const isLoading = useStore((state) => state.isLoading);
  const error = useStore((state) => state.error);

  // Select auth actions from store
  const setUser = useStore((state) => state.setUser);
  const setSession = useStore((state) => state.setSession);
  const setLoading = useStore((state) => state.setLoading);
  const setError = useStore((state) => state.setError);
  const clearError = useStore((state) => state.clearError);
  const reset = useStore((state) => state.reset);

  // Method to sign in
  const login = async (email: string, password: string) => {
    setLoading(true);
    clearError();
    
    const { data, error } = await signInWithEmail(email, password);
    
    if (error) {
      setError(error);
      setLoading(false);
      return false;
    }
    
    setSession(data.session);
    setUser(data.user);
    setLoading(false);
    return true;
  };

  // Method to sign up
  const register = async (email: string, password: string) => {
    setLoading(true);
    clearError();
    
    const { data, error } = await signUpWithEmail(email, password);
    
    if (error) {
      setError(error);
      setLoading(false);
      return false;
    }
    
    setSession(data.session);
    setUser(data.user);
    setLoading(false);
    return true;
  };

  // Method to sign out
  const logout = async () => {
    setLoading(true);
    clearError();
    
    const { error } = await signOut();
    
    if (error) {
      setError(error);
      setLoading(false);
      return false;
    }
    
    reset();
    return true;
  };

  // Initialize auth state
  const initAuth = async () => {
    setLoading(true);
    
    const { data, error } = await getCurrentSession();
    if (error) {
      setError(error);
      setLoading(false);
      return;
    }
    
    if (data?.session) {
      setSession(data.session);
      
      const { user, error: userError } = await getCurrentUser();
      if (userError) {
        setError(userError);
        setLoading(false);
        return;
      }
      
      setUser(user);
    }
    
    setLoading(false);
  };

  return {
    user,
    session,
    isLoading,
    error,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    initAuth,
  };
}
