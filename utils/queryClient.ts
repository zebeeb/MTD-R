
// This file sets up the React Query client with minimal configuration needed
// for data fetching in the Todo app

import { QueryClient } from '@tanstack/react-query';

// Define types for query error handling
export type QueryErrorType = Error | null | unknown;

// Create and export the QueryClient with basic configuration
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Set reasonable default stale time (5 minutes)
      staleTime: 5 * 60 * 1000,
      // Set retry attempts to 2 for failed queries
      retry: 2,
      // Handle fetch errors with sensible defaults
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});
