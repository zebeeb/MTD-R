
import React, { type ReactElement } from 'react';
import { render } from '@testing-library/react-native';
import { TamaguiProvider } from 'tamagui';
import config from '../tamagui.config';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <TamaguiProvider config={config}>
      {children}
    </TamaguiProvider>
  );
};

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from '@testing-library/react-native';
export { customRender as render };

// Add custom queries if needed later
export const renderWithStore = (ui: ReactElement, options = {}) => {
  return {
    ...customRender(ui, options),
  };
};
