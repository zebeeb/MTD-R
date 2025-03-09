
// Basic hook to connect React Query with Supabase
import { useQuery, QueryKey } from '@tanstack/react-query';
import { supabase } from '../utils/supabase';
import { PostgrestError } from '@supabase/supabase-js';

// A type-safe hook for reading data from Supabase using React Query
export function useSupabaseQuery<T>(
  table: string,
  queryKey: QueryKey,
  options?: {
    columns?: string;
    filter?: string;
    filterValue?: any;
    orderBy?: string;
    limit?: number;
    enabled?: boolean;
  }
) {
  const {
    columns = '*',
    filter,
    filterValue,
    orderBy,
    limit,
    enabled = true,
  } = options || {};

  return useQuery<T[], PostgrestError>({
    queryKey,
    queryFn: async () => {
      let query = supabase.from(table).select(columns);
      
      if (filter && filterValue !== undefined) {
        query = query.eq(filter, filterValue);
      }
      
      if (orderBy) {
        query = query.order(orderBy);
      }
      
      if (limit) {
        query = query.limit(limit);
      }
      
      const { data, error } = await query;
      
      if (error) {
        throw error;
      }
      
      return data as T[];
    },
    enabled,
  });
}
