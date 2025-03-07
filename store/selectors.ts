
// Task selectors
// These functions help extract and filter specific data from the task store

import { Task } from './types';
import { useTaskStore } from './taskStore';

/**
 * Returns all tasks for a given list ID
 */
export const useTasksByList = (listId?: string) => {
  return useTaskStore((state) => 
    state.tasks.filter((task) => task.listId === listId)
  );
};

/**
 * Returns all tasks due on a specific date
 */
export const useTasksByDate = (date: Date) => {
  return useTaskStore((state) => 
    state.tasks.filter((task) => {
      if (!task.dueDate) return false;
      
      const taskDate = new Date(task.dueDate);
      return (
        taskDate.getDate() === date.getDate() &&
        taskDate.getMonth() === date.getMonth() &&
        taskDate.getFullYear() === date.getFullYear()
      );
    })
  );
};

/**
 * Returns all tasks that are due today
 */
export const useTasksForToday = () => {
  const today = new Date();
  return useTasksByDate(today);
};

/**
 * Returns all tasks that are due tomorrow
 */
export const useTasksForTomorrow = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return useTasksByDate(tomorrow);
};

/**
 * Returns a specific list by ID
 */
export const useList = (listId: string) => {
  return useTaskStore((state) => 
    state.lists.find((list) => list.id === listId)
  );
};

/**
 * Returns all lists
 */
export const useLists = () => {
  return useTaskStore((state) => state.lists);
};
