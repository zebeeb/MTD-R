
/**
 * Supabase Query Utilities
 * 
 * This file provides utilities for using Supabase with React Query
 * Focused only on read operations needed for the current phase
 */

import { useQuery } from '@tanstack/react-query';
import { supabase, handleSupabaseError } from './supabase';
import { Task, List } from '../types/database.types';

// Query key prefixes for proper caching
const QUERY_KEYS = {
  TASKS: 'tasks',
  LISTS: 'lists',
  TASK: 'task',
  LIST: 'list',
};

/**
 * Hook to fetch all tasks for the current user
 */
export const useGetTasks = (userId: string | undefined) => {
  return useQuery({
    queryKey: [QUERY_KEYS.TASKS, userId],
    queryFn: async () => {
      if (!userId) return [];
      
      try {
        const { data, error } = await supabase
          .from('tasks')
          .select('*')
          .eq('user_id', userId)
          .order('order', { ascending: true });
          
        if (error) throw handleSupabaseError(error);
        
        return data as Task[];
      } catch (error) {
        throw handleSupabaseError(error);
      }
    },
    // Skip the query if there's no userId
    enabled: !!userId,
  });
};

/**
 * Hook to fetch all lists for the current user
 */
export const useGetLists = (userId: string | undefined) => {
  return useQuery({
    queryKey: [QUERY_KEYS.LISTS, userId],
    queryFn: async () => {
      if (!userId) return [];
      
      try {
        const { data, error } = await supabase
          .from('lists')
          .select('*')
          .eq('user_id', userId);
          
        if (error) throw handleSupabaseError(error);
        
        return data as List[];
      } catch (error) {
        throw handleSupabaseError(error);
      }
    },
    enabled: !!userId,
  });
};

/**
 * Hook to fetch a single task by ID
 */
export const useGetTask = (taskId: string | undefined) => {
  return useQuery({
    queryKey: [QUERY_KEYS.TASK, taskId],
    queryFn: async () => {
      if (!taskId) return null;
      
      try {
        const { data, error } = await supabase
          .from('tasks')
          .select('*')
          .eq('id', taskId)
          .single();
          
        if (error) throw handleSupabaseError(error);
        
        return data as Task;
      } catch (error) {
        throw handleSupabaseError(error);
      }
    },
    enabled: !!taskId,
  });
};
