Implement comprehensive end-to-end test based on the functionality in question. Following the following rules:


📋 Testing Rules


When to Use Each Testing Method

1. **Jest Unit Tests** - Use when:
    - Creating pure utility functions
    - Adding business logic
    - Implementing complex calculations
    - Testing isolated functionality
2. **React Testing Library** - Use when:
    - Creating new UI components
    - Modifying existing component behavior
    - Adding user interactions (clicks, inputs)
    - Testing component rendering
3. **TypeScript Type Checking** - Use when:
    - Adding new types/interfaces
    - Modifying existing types
    - Before committing any code
4. **Manual Testing** - Use when:
    - Verifying visual appearance
    - Testing animations
    - Checking platform-specific behaviors

Test Coverage Guidelines

- **Critical Path Functions**: 100% coverage ⭐⭐⭐⭐⭐
- **UI Components**: Test main functionality, not styling ⭐⭐⭐
- **Edge Cases**: Only test important ones that affect users ⭐⭐
- **Helper Functions**: Test only if they contain logic ⭐⭐


Notes
- the tests are reproducible
- tests actual functionalities from a users perspective
- when you see unreasonable tests or tests that could potentially be flaky or useless, make sure to call it out in your response.
- all tests should be stored under the tests/ folder.
- test filename should correspond to the system component - the conceptual component, not react component that we are testing.
- follow Maestro best practices.
- don't create new test unless you are instructed to

Document the changes made due to the bug fixes in the feature document you created in the implementation step