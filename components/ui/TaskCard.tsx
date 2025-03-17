import { Card, Text, XStack, YStack } from "tamagui";
import { memo } from "react";

interface TaskCardProps {
  title: string;
  listName?: string;
  listColor?: string;
  listIcon?: string;
  dueDate?: string;
}

const formatDueDate = (date?: string): string => {
  if (!date) return "";

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const dueDate = new Date(date);
  dueDate.setHours(0, 0, 0, 0);

  if (dueDate.getTime() === today.getTime()) return "Today";
  if (dueDate.getTime() === tomorrow.getTime()) return "Tomorrow";
  if (dueDate.getTime() === yesterday.getTime()) return "Yesterday";

  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};

export const TaskCard = memo(({ 
  title, 
  listName, 
  listColor = "#111212",
  listIcon,
  dueDate 
}: TaskCardProps) => {
  const isDuePast = dueDate ? new Date(dueDate) < new Date() : false;
  const formattedDate = formatDueDate(dueDate);

  const adjustColor = (hex: string): string => {
    return hex + "B3"; // 70% opacity
  };

  return (
    <Card
      borderRadius={12}
      backgroundColor={listColor ? adjustColor(listColor) : "#111212"}
      padding={16}
    >
      <YStack>
        <Text
          color="#ffffff"
          fontSize={14}
          fontWeight="500"
          numberOfLines={1}
          ellipsizeMode="tail"
          fontFamily="Roboto"
        >
          {title}
        </Text>

        <XStack justifyContent="space-between" alignItems="center" marginTop={8}>
          {listName && (
            <XStack space={4} alignItems="center">
              {listIcon && (
                <Text fontSize={9} fontFamily="Roboto">
                  {listIcon}
                </Text>
              )}
              <Text 
                color="#ffffff"
                fontSize={9}
                fontWeight="400"
                fontFamily="Roboto"
              >
                {listName}
              </Text>
            </XStack>
          )}

          {dueDate && (
            <Text
              color={isDuePast ? "#ff1b1b" : "#a4a4a4"}
              fontSize={9}
              fontWeight="400"
              fontStyle={isDuePast ? "italic" : "normal"}
              fontFamily="Roboto"
            >
              {formattedDate}
            </Text>
          )}
        </XStack>
      </YStack>
    </Card>
  );
});

TaskCard.displayName = "TaskCard";