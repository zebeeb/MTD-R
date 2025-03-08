
/**
 * Database Types
 * 
 * This file defines TypeScript types that match our Supabase database tables.
 * Only adding what's needed for current features to avoid premature complexity.
 */

// User profile data
export interface Profile {
  id: string;
  created_at: string;
  email?: string;
  name?: string;
  avatar_url?: string;
}

// Task data structure based on project requirements
export interface Task {
  id: string;
  created_at: string;
  user_id: string;
  title: string;
  description?: string;
  due_date?: string;
  list_id?: string;
  completed: boolean;
  order?: number; // For custom ordering within lists
}

// List data structure (for categorizing tasks)
export interface List {
  id: string;
  created_at: string;
  user_id: string;
  name: string;
  color: 'Red' | 'Orange' | 'Blue' | 'Green' | 'Purple' | 'Pink' | 'Yellow';
  icon?: string;
}

// Database response type helper
export type DbResult<T> = T extends PromiseLike<infer U> ? U : never;

// Export all types for Supabase tables
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: Omit<Profile, 'id' | 'created_at'>;
        Update: Partial<Omit<Profile, 'id' | 'created_at'>>;
      };
      tasks: {
        Row: Task;
        Insert: Omit<Task, 'id' | 'created_at'>;
        Update: Partial<Omit<Task, 'id' | 'created_at'>>;
      };
      lists: {
        Row: List;
        Insert: Omit<List, 'id' | 'created_at'>;
        Update: Partial<Omit<List, 'id' | 'created_at'>>;
      };
    };
  };
}
