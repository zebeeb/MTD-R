
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react-native';

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock expo-constants for tests
jest.mock('expo-constants', () => ({
  expoConfig: {
    extra: {
      supabaseUrl: 'test-url',
      supabaseAnonKey: 'test-key',
    },
  },
}));
