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
- Maximum file size: 200 lines
- Maximum function size: 30 lines
- Maximum component size: 150 lines

### 1.3 Naming Conventions
- Components: PascalCase
- Functions/Hooks: camelCase with descriptive names
- Types/Interfaces: PascalCase with 'Type' or 'Props' suffix
- Constants: UPPER_SNAKE_CASE

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
- Must use Yup schema validation
- Must include error messages
- Must handle all form states
- Must include form submission handling
- Must include form reset handling

### 5.2 API Validation
- Must use Zod for all API responses
- Must include error transformers
- Must handle all possible response types
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
- Must cover all user flows
- Must include error states
- Must include loading states
- Must include offline states
- Must include edge cases

## 7. Error Handling

### 7.1 Error Boundary Rules
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


## 8. Performance

### 8.1 React Performance
- Must use React.memo appropriately
- Must use useCallback for handlers
- Must use useMemo for expensive computations
- Must implement virtualization for lists
- Must use appropriate image formats and sizes
- Must implement proper memory management
- Must handle heavy computations on separate threads
- Must lazy load routes

### 8.2 Bundle Size
- Must code-split by route
- Must lazy load heavy dependencies
- Must optimize images
- Must minimize bundle size

## 9. Accessibility

### 9.1 Required Props
- Must include aria labels
- Must include role attributes
- Must handle focus states
- Must support screen readers
- Must support keyboard navigation

## 10. Documentation

### 10.1 Code Documentation
- Must include JSDoc for public functions
- Must include component props documentation
- Must include type documentation
- Must include usage examples
- Must document side effects

## 11. Version Control

### 11.1 Commit Rules
- Must include type (feat, fix, etc.)
- Must include scope
- Must include description
- Must include breaking changes
- Must reference issues

## 12. Development Process

### 12.1 Before Implementation
- Must review requirements
- Must plan component structure
- Must identify potential issues
- Must create test cases
- Must document approach

### 12.2 During Implementation
- Must follow all rules above
- Must write tests first
- Must implement features
- Must document code
- Must self-review code

### 12.3 After Implementation
- Must run all tests
- Must check performance
- Must verify accessibility
- Must update documentation
- Must clean up code

