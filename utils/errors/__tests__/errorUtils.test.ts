
// Tests for error utility functions
import {
  formatErrorMessage,
  categorizeError,
  safeAsync
} from '../errorUtils';
import {
  NetworkError,
  AuthError,
  ValidationError,
  UnexpectedError
} from '../types';

// Mock console.error to avoid cluttering test output
const originalConsoleError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});
afterAll(() => {
  console.error = originalConsoleError;
});

describe('formatErrorMessage', () => {
  it('formats Error instances', () => {
    const error = new Error('Test error');
    expect(formatErrorMessage(error)).toBe('Test error');
  });

  it('returns string errors as-is', () => {
    expect(formatErrorMessage('String error')).toBe('String error');
  });

  it('handles unknown error types', () => {
    expect(formatErrorMessage(null)).toBe('An unexpected error occurred');
    expect(formatErrorMessage(undefined)).toBe('An unexpected error occurred');
    expect(formatErrorMessage(123)).toBe('An unexpected error occurred');
  });
});

describe('categorizeError', () => {
  it('categorizes network errors', () => {
    const error = new Error('network failure');
    const categorized = categorizeError(error);
    expect(categorized).toBeInstanceOf(NetworkError);
  });

  it('categorizes auth errors', () => {
    const error = new Error('authentication failed');
    const categorized = categorizeError(error);
    expect(categorized).toBeInstanceOf(AuthError);
  });

  it('categorizes validation errors', () => {
    const error = new Error('validation failed for field');
    const categorized = categorizeError(error);
    expect(categorized).toBeInstanceOf(ValidationError);
  });

  it('returns the original error when no category matches', () => {
    const error = new Error('some other error');
    const categorized = categorizeError(error);
    expect(categorized).toBe(error);
  });

  it('wraps non-Error objects in UnexpectedError', () => {
    const categorized = categorizeError('string error');
    expect(categorized).toBeInstanceOf(UnexpectedError);
    expect(categorized.message).toBe('string error');
  });
});

describe('safeAsync', () => {
  it('returns the value when async function succeeds', async () => {
    const result = await safeAsync(() => Promise.resolve('success'));
    expect(result).toBe('success');
  });

  it('returns fallback value when provided and async function fails', async () => {
    const result = await safeAsync(
      () => Promise.reject(new Error('failure')),
      'fallback'
    );
    expect(result).toBe('fallback');
  });

  it('throws categorized error when no fallback is provided', async () => {
    await expect(
      safeAsync(() => Promise.reject(new Error('network failure')))
    ).rejects.toBeInstanceOf(NetworkError);
  });
});
