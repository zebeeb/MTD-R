
# Environment Configuration Guide

This document explains how to work with environment variables in the Muslim Todo app.

## Setting Up Environment Variables

1. Make a copy of `.env.example` and name it `.env`
2. Fill in the values in your `.env` file
3. The app will automatically read these values at build time

## Available Environment Variables

| Variable | Description | Default Value |
|----------|-------------|---------------|
| API_URL | The URL for the backend API | https://api.example.com |
| ENABLE_AI_FEATURES | Whether to enable AI features | false |
| APP_NAME | The name of the app | MuslimTodo |

## How to Use Environment Variables in Code

Import the environment helper in your files:

```typescript
import { env } from '../utils/environment';

// Then use it in your code
console.log(env.API_URL);
```

This approach ensures type safety and provides default values for local development.

## Adding New Environment Variables

1. Add the new variable to `.env.example`
2. Add the type in `types/env.types.ts`
3. Add the variable in `app.json` under the `extra` section
4. Add the variable with a default value in `utils/environment.ts`
5. Update this documentation
