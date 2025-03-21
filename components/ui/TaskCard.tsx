import { Stack, Text, XStack } from 'tamagui'
import { useMemo } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

// Helper function from specs to adjust background color
const getBackgroundColor = (hex: string) => {
  let hsl = hexToHSL(hex);
  return `hsl(${hsl.h}, 70%, 7%)`; 
};

// Convert HEX to HSL as specified in the initial code
const hexToHSL = (hex: string) => {
  let r = parseInt(hex.substring(1, 3), 16) / 255;
  let g = parseInt(hex.substring(3, 5), 16) / 255;
  let b = parseInt(hex.substring(5, 7), 16) / 255;
  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;
  if (max !== min) {
    let d = max - min;
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

type TaskCardProps = {
  title: string
  listName?: string 
  listColor?: string
  dueDate?: string
  completed?: boolean
  onToggleComplete?: () => void
}

export const TaskCard = ({ 
  title,
  listName,
  listColor = '#111212',
  dueDate,
  completed = false,
  onToggleComplete
}: TaskCardProps) => {
  const formattedDate = useMemo(() => {
    if (!dueDate) return '';
    const date = new Date(dueDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.getTime() === today.getTime()) return 'Today';
    if (date.getTime() === tomorrow.getTime()) return 'Tomorrow';
    if (date.getTime() === yesterday.getTime()) return 'Yesterday';

    return date.toLocaleDateString('en-US', { 
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }, [dueDate]);

  const isOverdue = useMemo(() => {
    if (!dueDate) return false;
    const date = new Date(dueDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  }, [dueDate]);

  return (
    // Stack component spacing:
    // - Remove marginVertical as it conflicts with parent Stack spacing
    // - This component should not control its own external spacing
    // - Parent Stack's 'space' prop will handle vertical gaps
    <Stack
      backgroundColor={getBackgroundColor(listColor)}
      paddingVertical={8} // Top and bottom padding set to 8px
      paddingHorizontal={15} // Left and right padding set to 17px
      borderRadius={12}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack flex={1}>
        {/* Title section */}
        <XStack justifyContent="space-between" alignItems="center">
          <Text
            color="#ddd"
            fontSize={16}
            fontWeight="300"
            numberOfLines={1}
            flex={1}
            marginRight={12}
          >
            {title}
          </Text>

          {/* Checkbox with updated dimensions */}
          <TouchableOpacity 
            onPress={onToggleComplete}
            style={{
              width: 22,
              height: 22,
              borderRadius: 5,
              borderWidth: 2,
              borderColor: listColor,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {completed && (
              <MaterialIcons name="check" size={16} color={listColor} />
            )}
          </TouchableOpacity>
        </XStack>

        {/* Bottom row for list name and due date */}
        {(listName || dueDate) && (
          <XStack marginTop={4} justifyContent="space-between" alignItems="center">
            {listName ? (
              <XStack space={4} alignItems="center">
                <MaterialIcons name="list" size={14} color={listColor} />
                <Text color={listColor} fontSize={12}>
                  {listName}
                </Text>
              </XStack>
            ) : (
              <Stack /> /* Empty stack to maintain layout when no list name */
            )}
            
            {dueDate && (
              <Text
                color={isOverdue ? '#ff1b1b' : '#a4a4a4'}
                fontSize={10}
                fontStyle={isOverdue ? 'italic' : 'normal'}
              >
                {formattedDate}
              </Text>
            )}
          </XStack>
        )}
      </Stack>
    </Stack>
  );
};