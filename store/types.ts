
// Core data type definitions for the task management system
// These types define the structure of our data and help prevent bugs through TypeScript's type checking

/**
 * Represents a list that tasks can belong to
 */
export interface List {
  id: string;
  name: string;
  color: string;
  icon: string;
}

/**
 * Represents a task in the todo application
 */
export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate?: Date;
  listId?: string;
  completed: boolean;
  createdAt: Date;
}

/**
 * Represents the state of the task store
 */
export interface TaskState {
  tasks: Task[];
  lists: List[];
  
  // Actions
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  updateTask: (id: string, updatedTask: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  completeTask: (id: string) => void;
  
  // List actions
  addList: (list: Omit<List, 'id'>) => void;
  updateList: (id: string, updatedList: Partial<List>) => void;
  deleteList: (id: string) => void;
}
