
// Basic error types for the application
// These types help categorize different errors that can occur in the app

/**
 * Base error class that extends the standard Error
 */
export class AppError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AppError';
  }
}

/**
 * Network errors for API calls and data fetching
 */
export class NetworkError extends AppError {
  constructor(message: string = 'Network request failed') {
    super(message);
    this.name = 'NetworkError';
  }
}

/**
 * Authentication related errors
 */
export class AuthError extends AppError {
  constructor(message: string = 'Authentication failed') {
    super(message);
    this.name = 'AuthError';
  }
}

/**
 * Validation errors for forms and user inputs
 */
export class ValidationError extends AppError {
  constructor(message: string = 'Validation failed') {
    super(message);
    this.name = 'ValidationError';
  }
}

/**
 * Unexpected errors that don't match other categories
 */
export class UnexpectedError extends AppError {
  constructor(message: string = 'An unexpected error occurred') {
    super(message);
    this.name = 'UnexpectedError';
  }
}
