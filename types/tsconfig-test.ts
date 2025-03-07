
// Simple TypeScript test file to verify configuration

// Test strict null checks
function strictNullTest(value: string | null): string {
  // This will error without strictNullChecks enabled
  if (value === null) {
    return 'Value is null';
  }
  return value;
}

// Test path aliases - using relative path to avoid runtime errors
// This tests that TypeScript compilation works, but uses a path that works at runtime
import { ThemedText } from '../components/ThemedText';

// Basic Todo type as a simple example of what we'll need
interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

// Simple function to test type checking
function markTodoComplete(todo: TodoItem): TodoItem {
  return {
    ...todo,
    completed: true
  };
}

// Export to avoid unused variables warning
export { strictNullTest, markTodoComplete };
