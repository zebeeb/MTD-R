// This file sets up the React Query client with minimal configuration needed
// for data fetching in the Todo app

import { QueryClient } from '@tanstack/react-query';
import { logError, formatErrorMessage, categorizeError } from './errors/errorUtils';

// Configure the query client with default error handling
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Retry failed requests 1 time before capturing the error
      retry: 1,
      // Keep data for 5 minutes in the cache
      staleTime: 5 * 60 * 1000,
      // Handle errors consistently across all queries
      onError: (error) => {
        logError(error);
      },
    },
    mutations: {
      // Don't retry mutations automatically
      retry: 0,
      // Handle errors consistently across all mutations
      onError: (error) => {
        logError(error);
      },
    },
  },
});

/**
 * Helper hook factory to create standardized error handling for React Query
 * usage throughout the application
 */
export const createErrorHandler = () => {
  return {
    onError: (error: unknown) => {
      const categorizedError = categorizeError(error);
      logError(categorizedError);
      return categorizedError;
    },
    getErrorMessage: (error: unknown): string => {
      return formatErrorMessage(error);
    }
  };
};