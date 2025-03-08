
// A basic error boundary component to prevent app crashes
import React from 'react';
import { View, Text, Button } from 'tamagui';
import { logError } from '../utils/errors/errorUtils';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Basic error boundary to catch errors in the component tree
 * and prevent the entire app from crashing
 */
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { 
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { 
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Log the error
    logError(error);
  }

  resetError = (): void => {
    this.setState({ 
      hasError: false,
      error: null
    });
  };

  render(): React.ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      return (
        <View padding="$4" flex={1} justifyContent="center" alignItems="center">
          <Text fontSize="$6" fontWeight="bold" marginBottom="$2">
            Something went wrong
          </Text>
          <Text marginBottom="$4">
            {this.state.error?.message || 'An unexpected error occurred'}
          </Text>
          <Button 
            onPress={this.resetError}
            theme="active"
          >
            Try Again
          </Button>
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
