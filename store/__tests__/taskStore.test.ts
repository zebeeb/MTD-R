
// Task store tests
// Tests the core functionality of the task store

import { useTaskStore } from '../taskStore';
import { Task } from '../types';

// Reset the store state before each test
beforeEach(() => {
  // Get the state reset function from the store
  const { setState } = useTaskStore as any;
  setState({ tasks: [], lists: [] });
});

describe('Task Store', () => {
  test('should add a task', () => {
    // Arrange
    const initialTaskCount = useTaskStore.getState().tasks.length;
    const newTask = {
      title: 'Test Task',
      description: 'Test Description',
      completed: false,
    };
    
    // Act
    useTaskStore.getState().addTask(newTask);
    
    // Assert
    const tasks = useTaskStore.getState().tasks;
    expect(tasks.length).toBe(initialTaskCount + 1);
    expect(tasks[0].title).toBe('Test Task');
    expect(tasks[0].description).toBe('Test Description');
  });
  
  test('should update a task', () => {
    // Arrange
    const newTask = {
      title: 'Test Task',
      description: 'Test Description',
      completed: false,
    };
    useTaskStore.getState().addTask(newTask);
    const taskId = useTaskStore.getState().tasks[0].id;
    
    // Act
    useTaskStore.getState().updateTask(taskId, { title: 'Updated Title' });
    
    // Assert
    const task = useTaskStore.getState().tasks[0];
    expect(task.title).toBe('Updated Title');
    expect(task.description).toBe('Test Description');
  });
  
  test('should delete a task', () => {
    // Arrange
    const newTask = {
      title: 'Test Task',
      description: 'Test Description',
      completed: false,
    };
    useTaskStore.getState().addTask(newTask);
    const initialTaskCount = useTaskStore.getState().tasks.length;
    const taskId = useTaskStore.getState().tasks[0].id;
    
    // Act
    useTaskStore.getState().deleteTask(taskId);
    
    // Assert
    expect(useTaskStore.getState().tasks.length).toBe(initialTaskCount - 1);
  });
  
  test('should add a list', () => {
    // Arrange
    const initialListCount = useTaskStore.getState().lists.length;
    const newList = {
      name: 'Test List',
      color: 'blue',
      icon: '📋',
    };
    
    // Act
    useTaskStore.getState().addList(newList);
    
    // Assert
    const lists = useTaskStore.getState().lists;
    expect(lists.length).toBe(initialListCount + 1);
    expect(lists[0].name).toBe('Test List');
    expect(lists[0].color).toBe('blue');
  });
});
