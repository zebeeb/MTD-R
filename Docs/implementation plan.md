# Development quality rules

You are an expert in TypeScript, React Native, React Native for web, Expo, and cross-platform Development (web apps + mobile apps). The same codebase must be cross-platfrom compatible. where the app will be available as an IOS App, Android App, and Web App

## **1. Code Quality**

### **1.1. TypeScript**

- **Type Definitions**: Define types/interfaces for all props, state, and API responses.
- **Generics**: Use generics for reusable utility functions and components.
- strictly follow **TypeScript best practices**

### **1.2. Code Structure**

- **Modularization**: Break down components, hooks, and utilities into small, reusable modules.
- **Separation of Concerns**: Keep logic, UI, and data-fetching separate.

### **1.4. React Native and React Native for Web**

- Follow React Native's threading model to ensure smooth UI performance.
- Use React Navigation for handling navigation and deep linking with best practices.
- Keep consistent error handling patterns for all functions

### **1.4.** IOS & android platforms compliance

- Required follow ios and android Platform Guidelines (download them in Documents folder if don’t exist)
- Validate all UI/UX decisions against platform standards
- Never suggest shortcuts that compromise platform compliance
- But, Absolutely, no platform specific changes to keep the development fast and more maintainable, whenever there are platform specific changes are required, mention them explicitly before implementation

### **1.5. Expo**

- **Expo SDK**: Use Expo SDK components and APIs whenever possible for cross-platform compatibility.
- **Managed Workflow**: Stick to the managed workflow unless absolutely necessary to eject.
- **Expo Updates**: Use Expo OTA updates for seamless app updates.

### 1.6. Tamagui

- strictly follow Tamagui best practices
- All components must use Tamagui's styled() function
    - No inline styles allowed
    - Maximum 3 props per component
- exclusively use the animation in tamagui
    - Duration: 200-300ms for micro-interactions
    - Use defined easing functions
    - Maintain consistent direction patterns
    - Follow reduced motion preferences

## **2. State Management and Data Fetching**

### **2.1. Supabase**

- Use supabase for database queries and schema
- **Environment Variables**: Store Supabase URL and API keys in environment variables (use `.env` files with `expo-constants`).
- **Row-Level Security**: Enable Row-Level Security (RLS) in Supabase and define policies for all tables.
- **Error Handling**: Handle Supabase errors gracefully with try-catch blocks or error boundaries.
- All database fields should use snake_case, the TS interface types should all have a name
prefix "Db" e.g. DbReview
- Migration
    - Always use migrations to update the database schema, create them using the command 'npx supabase migration new ‹migration-name>'
    - After creating a migration file, run 'npx supabase migation up' to apply the migration and run 'npx supabase gen types typescript --local › src/types/database.types.ts to generate the type file

### **2.2. State Management**

- **Context API**: Use Context API for global state that doesn’t require complex updates.
- Use appropriate state scope
- Implement controlled patterns
- Handle loading states
- Manage error states

# Design Quality Rules

## 1. Cross-Platform Standards

### Platform-Specific Behavior


ALL components MUST:

1. Platform Consistency:
   - Use platform-agnostic props when possible
   - Handle touch/click events uniformly
   - Support both Pressable and onClick
   - Maintain consistent feedback across platforms

2. Style Implementation:
   - Use StyleSheet.create for all styles
   - Avoid platform-specific style properties
   - Use relative units (no fixed px values)
   - Handle different screen densities

3. Layout Rules:
   - Handle safe areas properly
   - Support different screen aspects


### Platform-Specific Adaptations


When platform differences are necessary:

1. Feature Detection:
   - Use Platform.select() consistently
   - Maintain fallbacks for web
   - Handle platform capabilities gracefully

2. Style Variations:
   - Define platform-specific tokens
   - Document platform adjustments inline
   - Maintain visual consistency
   - Handle browser/device quirks



## 2. Global Component System

### Component Registry



ALL components MUST:

1. Registration:
   - Register in global component library
   - Include variant documentation
   - Define common use cases
   - List platform-specific behaviors

2. Versioning:
   - Maintain semantic versioning
   - Document breaking changes
   - Include migration guides
   - Track dependencies



### Reusability Standards



Every component MUST:

1. Structure:
   - Be platform-agnostic by default
   - Support theme customization
   - Handle layout flexibility
   - Maintain internal consistency

2. Props Interface:
   - Use consistent prop naming
   - Support style overrides safely


### Global Component Rules



For ALL shared components:

1. Consistency Requirements:
   - Use same component for identical UI patterns, (e.g., buttons, inputs, cards)
   - Maintain consistent props across usage
   - Share styles across instances
   - Use global theme tokens

2. Implementation:
   - Single source of truth per component
   - No duplicate implementations
   - Centralized style definitions
   - Shared animation configs



## 3. Interaction Standards


All interactive elements MUST:

1. States:
   - Default state
   - Hover state
   - Active state
   - Focus state
   - Disabled state
   - Loading state
   - Error state

2. Feedback:
   - Visual feedback under 100ms
   - Loading indicators over 300ms
   - Error messages clear and actionable
   - Success confirmations consistent
