
import { Stack } from 'tamagui'
import { TaskCard } from '../../components/ui/TaskCard'
import { ScrollView } from 'react-native'

export default function TestScreen() {
  const sampleTasks = [
    {
      title: "Buy groceries from the store",
      listName: "Shopping",
      listColor: "#17bb7e",
      dueDate: new Date().toISOString(),
      completed: false
    },
    {
      title: "Complete project presentation",
      listName: "Work",
      listColor: "#1c71c2",
      dueDate: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
      completed: false
    },
    {
      title: "Call dentist for appointment",
      listName: "Health",
      listColor: "#bf2b68",
      dueDate: new Date(Date.now() - 86400000).toISOString(), // Yesterday
      completed: true
    },
    {
      title: "Review meeting notes",
      listName: "Work",
      listColor: "#1c71c2",
      completed: false
    },
    {
      title: "Pay electricity bill",
      listName: "Bills",
      listColor: "#d14c15",
      dueDate: new Date(Date.now() + 172800000).toISOString(), // Day after tomorrow
      completed: false
    }
  ]

  return (
    <ScrollView>
      <Stack padding={16} space={8}>
        {sampleTasks.map((task, index) => (
          <TaskCard
            key={index}
            title={task.title}
            listName={task.listName}
            listColor={task.listColor}
            dueDate={task.dueDate}
            completed={task.completed}
            onToggleComplete={() => {}}
          />
        ))}
      </Stack>
    </ScrollView>
  )
}
