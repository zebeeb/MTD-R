import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
// Import our Tamagui test component
import { TamaguiTest } from '@/components/ui/TamaguiTest';

export default function TabOneScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Tab One</ThemedText>
      <ThemedView
        style={styles.separator}
        darkColor="rgba(255,255,255,0.1)"
        lightColor="rgba(0,0,0,0.1)"
      />

      {/* Add our Tamagui test component */}
      <TamaguiTest />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
import { View } from 'react-native';
import { Stack } from 'tamagui';
import { TaskCard } from '@/components/ui/TaskCard';

export default function TabOneScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Stack space={10}>
        {/* Sample cards for testing */}
        <TaskCard 
          title="Complete project documentation"
          listName="Work"
          listColor="#bf2b68"
          dueDate={new Date().toISOString()}
        />
        <TaskCard 
          title="Buy groceries"
          listName="Personal"
          listColor="#17bb7e"
          dueDate={new Date(Date.now() + 86400000).toISOString()} // Tomorrow
        />
      </Stack>
    </View>
  );
}
