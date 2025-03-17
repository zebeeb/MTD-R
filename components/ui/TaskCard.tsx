
import React from 'react';
import { Stack, Text, XStack, YStack, Button } from 'tamagui';
import { ListIcon } from './ListIcon';

// Define the task type
type TaskProps = {
  title: string;
  listName: string;
  listColor: string;
  dueDate: string;
  completed?: boolean;
  onToggleComplete?: () => void;
};

export const TaskCard = ({
  title,
  listName,
  listColor,
  dueDate,
  completed = false,
  onToggleComplete,
}: TaskProps) => {
  // Function to adjust background color
  const getBackgroundColor = (hex: string) => {
    // Convert hex to HSL and return with 70% saturation and 7% lightness
    const hsl = hexToHSL(hex);
    return `hsl(${hsl.h}, 70%, 7%)`;
  };

  // Function to convert HEX to HSL
  const hexToHSL = (hex: string) => {
    const r = parseInt(hex.substring(1, 3), 16) / 255;
    const g = parseInt(hex.substring(3, 5), 16) / 255;
    const b = parseInt(hex.substring(5, 7), 16) / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r 
        ? (g - b) / d + (g < b ? 6 : 0)
        : max === g
        ? (b - r) / d + 2
        : (r - g) / d + 4;
      h *= 60;
    }
    return { h, s: s * 100, l: l * 100 };
  };

  return (
    <Stack
      backgroundColor={getBackgroundColor(listColor)}
      borderRadius={12}
      padding={16}
      marginVertical={5}
    >
      <XStack justifyContent="space-between" alignItems="center">
        <YStack flex={1}>
          <Text
            color="$color.white"
            fontSize={14}
            fontWeight="500"
            numberOfLines={1}
          >
            {title}
          </Text>
          <XStack space={4} marginTop={8} alignItems="center">
            <ListIcon size={12} color="#bbb" />
            <Text color="#bbb" fontSize={9}>
              {listName}
            </Text>
          </XStack>
        </YStack>
        
        <XStack alignItems="center" space={12}>
          <Text
            color={dueDate.includes('Yesterday') ? '#ff1b1b' : '#bbb'}
            fontSize={9}
            fontStyle={dueDate.includes('Yesterday') ? 'italic' : 'normal'}
          >
            {dueDate}
          </Text>
          <Button
            size="$2"
            width={24}
            height={24}
            borderRadius={5}
            borderWidth={2}
            borderColor={listColor}
            backgroundColor={completed ? listColor : 'transparent'}
            onPress={onToggleComplete}
            padding={0}
          >
            {completed && '✓'}
          </Button>
        </XStack>
      </XStack>
    </Stack>
  );
};
