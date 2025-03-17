
import React from 'react';
import { Stack, YStack } from 'tamagui';
import { TaskCard } from '../../components/ui/TaskCard';

export default function TaskCardsScreen() {
  return (
    <Stack flex={1} padding="$4">
      <YStack space="$2">
        <TaskCard
          title="Buy groceries for the week"
          listName="Shopping"
          listColor="#bf2b68"
          dueDate="Today"
          completed={false}
        />
        <TaskCard
          title="Complete project presentation"
          listName="Work"
          listColor="#17bb7e"
          dueDate="Tomorrow"
          completed={true}
        />
        <TaskCard
          title="Call doctor for appointment"
          listName="Personal"
          listColor="#1c71c2"
          dueDate="Yesterday"
          completed={false}
        />
      </YStack>
    </Stack>
  );
}
