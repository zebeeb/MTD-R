
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react-native';

// Mock Tamagui's native dependencies
jest.mock('@tamagui/core', () => ({
  ...jest.requireActual('@tamagui/core'),
  useTheme: () => ({
    background: '#FFFFFF',
    color: '#000000'
  })
}));

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
