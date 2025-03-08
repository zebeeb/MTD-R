
// Tests for the ErrorBoundary component
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'tamagui';
import ErrorBoundary from '../ErrorBoundary';

// Component that throws an error for testing purposes
const ErrorThrowingComponent = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error from component');
  }
  return <Text>Normal component rendering</Text>;
};

describe('ErrorBoundary', () => {
  // Suppress console.error for expected errors during tests
  const originalConsoleError = console.error;
  beforeAll(() => {
    console.error = jest.fn();
  });
  afterAll(() => {
    console.error = originalConsoleError;
  });

  it('renders children when there is no error', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <Text>Test Child</Text>
      </ErrorBoundary>
    );
    
    expect(getByText('Test Child')).toBeTruthy();
  });

  it('renders error UI when a child throws', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <ErrorThrowingComponent shouldThrow={true} />
      </ErrorBoundary>
    );
    
    expect(getByText('Something went wrong')).toBeTruthy();
    expect(getByText('Test error from component')).toBeTruthy();
  });

  it('renders custom fallback when provided', () => {
    const { getByText } = render(
      <ErrorBoundary 
        fallback={<Text>Custom error fallback</Text>}
      >
        <ErrorThrowingComponent shouldThrow={true} />
      </ErrorBoundary>
    );
    
    expect(getByText('Custom error fallback')).toBeTruthy();
  });

  it('resets and re-renders children when retry button is clicked', () => {
    // Create a component that can change its error state
    const TestComponent = () => {
      const [shouldThrow, setShouldThrow] = React.useState(true);
      
      React.useEffect(() => {
        // Set shouldThrow to false after a short delay
        // This simulates the component recovering after an error
        if (shouldThrow) {
          setTimeout(() => {
            setShouldThrow(false);
          }, 100);
        }
      }, [shouldThrow]);
      
      return (
        <ErrorBoundary>
          {shouldThrow ? (
            <ErrorThrowingComponent shouldThrow={true} />
          ) : (
            <Text>Recovered component</Text>
          )}
        </ErrorBoundary>
      );
    };
    
    const { getByText, queryByText } = render(<TestComponent />);
    
    // Initially shows error
    expect(getByText('Something went wrong')).toBeTruthy();
    
    // Click the retry button
    fireEvent.press(getByText('Try Again'));
    
    // Now the component should render properly
    expect(queryByText('Recovered component')).toBeTruthy();
  });
});
