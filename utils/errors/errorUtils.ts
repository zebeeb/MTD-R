
// Error utility functions to standardize error handling across the app
import { NetworkError, AuthError, ValidationError, UnexpectedError } from './types';

/**
 * Formats an error into a user-friendly message
 */
export const formatErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  
  if (typeof error === 'string') {
    return error;
  }
  
  return 'An unexpected error occurred';
};

/**
 * Categorizes an error into one of our custom error types
 */
export const categorizeError = (error: unknown): Error => {
  if (error instanceof Error) {
    // Network errors
    if (
      error.message.includes('network') || 
      error.message.includes('connection') ||
      error.message.includes('timeout')
    ) {
      return new NetworkError(error.message);
    }
    
    // Auth errors
    if (
      error.message.includes('authentication') ||
      error.message.includes('unauthorized') ||
      error.message.includes('forbidden') ||
      error.message.includes('permission')
    ) {
      return new AuthError(error.message);
    }
    
    // Validation errors
    if (
      error.message.includes('validation') ||
      error.message.includes('invalid') ||
      error.message.includes('required')
    ) {
      return new ValidationError(error.message);
    }
    
    return error;
  }
  
  return new UnexpectedError(
    typeof error === 'string' ? error : 'An unexpected error occurred'
  );
};

/**
 * Logger function for consistent error logging
 */
export const logError = (error: unknown): void => {
  const categorizedError = categorizeError(error);
  
  // In development, log the full error
  if (__DEV__) {
    console.error('Error:', categorizedError);
  } else {
    // In production, we could send this to a monitoring service
    // For now, just log the basics
    console.error(
      `Error: [${categorizedError.name}] ${categorizedError.message}`
    );
  }
};

/**
 * Helper to safely handle async operations with consistent error handling
 */
export async function safeAsync<T>(
  asyncFn: () => Promise<T>,
  fallbackValue?: T
): Promise<T> {
  try {
    return await asyncFn();
  } catch (error) {
    logError(error);
    
    if (fallbackValue !== undefined) {
      return fallbackValue;
    }
    
    throw categorizeError(error);
  }
}
