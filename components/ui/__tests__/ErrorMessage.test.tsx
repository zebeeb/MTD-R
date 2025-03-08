
// Tests for the ErrorMessage component
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ErrorMessage from '../ErrorMessage';

describe('ErrorMessage', () => {
  it('renders the error message correctly', () => {
    const { getByText } = render(
      <ErrorMessage error={new Error('Test error message')} />
    );
    
    expect(getByText('Error')).toBeTruthy();
    expect(getByText('Test error message')).toBeTruthy();
  });

  it('formats non-Error objects properly', () => {
    const { getByText } = render(
      <ErrorMessage error="String error message" />
    );
    
    expect(getByText('String error message')).toBeTruthy();
  });

  it('shows retry button when onRetry is provided', () => {
    const onRetry = jest.fn();
    const { getByText } = render(
      <ErrorMessage error="Error with retry" onRetry={onRetry} />
    );
    
    const retryButton = getByText('Try Again');
    expect(retryButton).toBeTruthy();
    
    fireEvent.press(retryButton);
    expect(onRetry).toHaveBeenCalledTimes(1);
  });

  it('does not show retry button when onRetry is not provided', () => {
    const { queryByText } = render(
      <ErrorMessage error="Error without retry" />
    );
    
    expect(queryByText('Try Again')).toBeNull();
  });
});
