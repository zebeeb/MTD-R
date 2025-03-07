
// A simple test component to verify Tamagui is working correctly
import React from 'react';
import { Button, H1, Text, XStack, YStack } from 'tamagui';

export const TamaguiTest = () => {
  return (
    <YStack space="$4" padding="$4" alignItems="center">
      <H1>Tamagui Test</H1>
      <Text>This is a simple test component using Tamagui</Text>
      <XStack space="$2">
        <Button theme="blue">Primary Button</Button>
        <Button theme="red">Secondary Button</Button>
      </XStack>
    </YStack>
  );
};
