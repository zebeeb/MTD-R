
# Setting Up Maestro Testing

This guide explains how to set up and run Maestro tests for our Todo app.

## What is Maestro?

Maestro is an end-to-end testing framework for mobile apps. It allows us to:
- Simulate real user interactions (tapping, scrolling, typing)
- Verify elements appear on screen
- Test navigation between screens
- Ensure our app works as expected from a user's perspective

## Installation

1. Install Maestro CLI:
   ```bash
   curl -Ls "https://get.maestro.mobile.dev" | bash
   ```

2. Run the setup script:
   ```bash
   node scripts/setup-maestro.js
   ```

## Running Tests

To run all tests:
```bash
npm run test:e2e
```

To run a specific test:
```bash
npm run test:e2e:single maestro/flows/app-launch.yaml
```

## Writing Tests

Tests are written in YAML format and located in the `maestro/flows` directory.

Basic test structure:
```yaml
appId: com.todo.app
---
- launchApp
- assertVisible: "Some Text On Screen"
- tapOn: "Button Label"
```

For more information, see the [Maestro documentation](https://maestro.mobile.dev/getting-started/writing-your-first-flow).
