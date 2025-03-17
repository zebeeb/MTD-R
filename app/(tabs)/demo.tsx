
import { View } from 'react-native';
import { TaskCard } from '@/components/ui/TaskCard';
import { YStack } from 'tamagui';

export default function DemoScreen() {
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#000000' }}>
      <YStack space={5}>
        <TaskCard 
          title="Cheese: white, blue, Gouda"
          listName="Groceries"
          listIcon="🛒"
          listColor="#17bb7e"
          dueDate={(() => {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            return yesterday.toISOString();
          })()}
        />
        
        <TaskCard 
          title="Buy the minced meat"
          listName="Groceries"
          listIcon="🛒"
          listColor="#17bb7e"
          dueDate={new Date().toISOString()}
        />
        
        <TaskCard 
          title="prepare the biweekly meeting"
          listName="Work"
          listIcon="💼"
          listColor="#bf2b68"
          dueDate="2025-03-09T00:00:00.000Z"
        />
        
        <TaskCard 
          title="Send the ad proposal"
          listName="Work"
          listIcon="💼"
          listColor="#bf2b68"
          dueDate={new Date().toISOString()}
        />
        
        <TaskCard 
          title="Fix the closet"
          listName="Home"
          listIcon="🏠"
          listColor="#1c71c2"
          dueDate={new Date().toISOString()}
        />
      </YStack>
    </View>
  );
}
