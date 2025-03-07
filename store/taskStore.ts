
// Task management store 
// Handles all task-related state and operations using Zustand

import { create } from 'zustand';
import { Task, TaskState, List } from './types';

/**
 * Creates and manages the task store state
 */
export const useTaskStore = create<TaskState>((set) => ({
  // Initial state
  tasks: [],
  lists: [],
  
  // Task actions
  addTask: (task) => set((state) => ({
    tasks: [
      ...state.tasks,
      {
        ...task,
        id: generateId(),
        createdAt: new Date(),
      },
    ],
  })),
  
  updateTask: (id, updatedTask) => set((state) => ({
    tasks: state.tasks.map((task) => 
      task.id === id ? { ...task, ...updatedTask } : task
    ),
  })),
  
  deleteTask: (id) => set((state) => ({
    tasks: state.tasks.filter((task) => task.id !== id),
  })),
  
  completeTask: (id) => set((state) => ({
    tasks: state.tasks.map((task) => 
      task.id === id ? { ...task, completed: true } : task
    ),
  })),
  
  // List actions
  addList: (list) => set((state) => ({
    lists: [
      ...state.lists,
      {
        ...list,
        id: generateId(),
      },
    ],
  })),
  
  updateList: (id, updatedList) => set((state) => ({
    lists: state.lists.map((list) => 
      list.id === id ? { ...list, ...updatedList } : list
    ),
  })),
  
  deleteList: (id) => set((state) => ({
    lists: state.lists.filter((list) => list.id !== id),
    // Also remove list assignment from tasks in this list
    tasks: state.tasks.map((task) => 
      task.listId === id ? { ...task, listId: undefined } : task
    ),
  })),
}));

/**
 * Generates a simple unique ID
 * Note: For production, consider using a more robust ID generation method
 */
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}
