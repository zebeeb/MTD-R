# Tech Stack Implementation Rules
# Based on Official Documentation and Community Standards

## References:
- React Native Best Practices (2024) [source: dev.to/hellonehha/react-native-code-practices-6dl]
- React Native Project Structure [source: medium.com/@hardikthakker/react-native-best-practices-e7a18f9752fa]

## 1. TypeScript & General Code Quality

### 1.1 TypeScript Configuration
json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react-native",
    "lib": ["es2017"],
    "moduleResolution": "node",
    "noEmit": true,
    "target": "esnext"
  }
}


### 1.2 Code Organization
- Follow feature-based folder structure
- Organize by domain and use cases within them
- Keep shared code for UI components at top level
- Document project structure in README
- prefered file size: 200 lines
- prefered function size: 30 lines
- prefered component size: 150 lines

### 1.3 Naming Conventions
- Components: PascalCase
- Functions/Hooks: camelCase with descriptive names
- Types/Interfaces: PascalCase with 'Type' or 'Props' suffix
- Constants: UPPER_SNAKE_CASE

### 1.4 Code Documentation
- Comment complex logic only (avoid obvious comments)
- Document "why" not "what" in comments
- Keep comments updated when code changes

## 2. React Native & React Native Web

### 2.1 Components
- Must use Tamagui components exclusively
- No direct StyleSheet.create usage
- No inline styles
- Must handle both touch and mouse events
- Must include loading states
- Must include error states

### 2.2 Hooks Rules
- Custom hooks must start with 'use'
- Must handle cleanup in useEffect
- Must specify all dependencies
- Must use appropriate dependency arrays
- Must handle all possible states (loading, error, success)

## 3. Tamagui Implementation

### 3.1 Styling
typescript
// Correct
const Button = styled(Pressable, {
  variants: {
    size: {
      small: { padding: '$2' },
      large: { padding: '$4' }
    }
  }
})

// Incorrect - No direct style props
<View style={{ padding: 10 }} />


### 3.2 Theme Usage
- Use only theme tokens
- No hard-coded colors
- No hard-coded sizes
- No hard-coded spacing

## 4. State Management

### 4.1 Zustand Store Rules
- Start with a simple setup, one store
- Separate stores by feature
- Include TypeScript types
- Include selectors
- Include action creators
- Must be immutable

### 4.2 React Query Rules
- Must include error handling
- Must include retry logic
- Must include stale time
- Must include cache time
- Must handle offline state

## 5. Form Handling

### 5.1 React Hook Form
### 5.1 Form Validation
- Use React Hook Form's built-in validation where possible
- Add schema validation only for complex forms
- Include clear error messages
- Handle all form states (loading, error, success)

### 5.2 API Validation
- Must include error transformers
- Must handle possible response types
- Must include type inference

## 6. Testing

### 6.1 Maestro Tests
yaml
# Required test structure
appId: com.yourapp
name: Feature Test
tests:
  - name: "Feature Flow"
    steps:
      - loadingWait: 2000
      - assertVisible: "Expected Element"
      - tap: "Button Text"
      - assertVisible: "Success State"


### 6.2 Test Coverage Rules
- Must 80% test coverage 
- Must include error states
- Must include loading states
- Must include offline states
- Must include edge cases
- Prioritize tests for critical user flows over edge cases initially

## 7. Error Handling

### 7.1 Error Boundary Rules
- Use a single error boundary pattern throughout the app
- Keep error recovery mechanisms simple and consistent
- handle only the important states
- Must implement at feature level
- Must include error reporting
- Must include recovery mechanism
- Must preserve app state
- Must log errors properly

### 7.2 API Error Handling
typescript
try {
  const data = await api.fetch()
  return successHandler(data)
} catch (error) {
  if (error instanceof NetworkError) {
    return networkErrorHandler(error)
  }
  return generalErrorHandler(error)
}

### 7.3 User-Facing Error Messages
- All error messages must be user-friendly
- Avoid technical jargon in user-visible errors
- Include clear next steps for resolution when possible


## 8. Performance

### 8.1 React Performance
- Use performance optimizations like React.memo and useCallback only when performance issues are identified through testing
- Must use useMemo for expensive computations
- Must implement virtualization for lists
- Must use appropriate image formats and sizes
- Must implement proper memory management
- Must handle heavy computations on separate threads
- Must lazy load routes

### 8.2 Platform-Specific Optimizations
- Avoid platform-specific changes unless absolutely necessary
- Document all platform-specific code thoroughly in Docs/platform-specific changes.md
- Always try platform-agnostic solutions first

## 9. Accessibility

### 9.1 Core A11y Requirements
- Use semantic HTML/components and proper heading hierarchy
- Ensure keyboard navigation for all interactive elements
- Maintain 4.5:1 contrast ratio for all text
- Add aria-labels to critical interactive elements
- Test with screen readers on critical user flows
- Document which components have specific a11y enhancements in Docs/accessibility.md

## 10. Version Control

### 10.1 Commit Rules
- Must include type (feat, fix, etc.)
- Must include scope
- Must include description
- Must include breaking changes
- Must reference issues

## 11. Development Process

### 11.1 Before Implementation
- Must review requirements
- Must plan component structure
- Must identify potential issues
- Must create test cases

### 11.2 Scope Management
- Each code change must address only one specific feature or bug
- Changes should be as small as possible while completing the task
- Changes to existing files should be minimal and focused


## 12. Dependency Management
- Limit third-party dependencies to essential ones
- Review all new dependencies for size impact and maintenance status
- Prefer built-in functionality when available

## 13. Progressive Enhancement
- Start with core functionality only
- Add advanced features only after core is stable
- Validate each increment independently