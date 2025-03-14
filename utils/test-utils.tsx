
import React, { type ReactElement } from 'react';
import { render } from '@testing-library/react-native';
import { TamaguiProvider, createTamagui } from 'tamagui';
import config from '../tamagui.config';

// Create a test-specific Tamagui instance with a default theme
const testConfig = createTamagui({
  ...config,
  defaultTheme: 'light'
});

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <TamaguiProvider config={testConfig} defaultTheme="light">
      {children}
    </TamaguiProvider>
  );
};

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react-native';
export { customRender as render };
