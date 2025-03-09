
// Basic TypeScript types for Supabase database tables
// These will be expanded as we implement more features

// Task-related types
export interface Task {
  id: string;
  title: string;
  description?: string;
  due_date?: string;
  list_id?: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  completed: boolean;
  order: number;
}

// List-related types
export interface TaskList {
  id: string;
  name: string;
  color: string;
  icon: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

// These types will be expanded as we implement more features
