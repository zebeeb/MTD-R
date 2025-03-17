
import { Stack, Text } from 'tamagui'
import { useMemo } from 'react'

type TaskCardProps = {
  title: string
  listName?: string 
  listColor?: string
  dueDate?: string
}

export const TaskCard = ({ 
  title,
  listName,
  listColor = '#111212', // Default background from specs
  dueDate
}: TaskCardProps) => {
  // Format due date based on spec requirements
  const formattedDate = useMemo(() => {
    if (!dueDate) return ''
    const date = new Date(dueDate)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    if (date.getTime() === today.getTime()) return 'Today'
    if (date.getTime() === tomorrow.getTime()) return 'Tomorrow'
    if (date.getTime() === yesterday.getTime()) return 'Yesterday'
    
    return date.toLocaleDateString('en-US', { 
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }, [dueDate])

  return (
    <Stack
      backgroundColor={listColor}
      padding={16}
      borderRadius={12}
      marginVertical={5}
    >
      <Text
        color="#ffffff"
        fontSize={14}
        fontWeight="500"
        numberOfLines={1}
      >
        {title}
      </Text>
      
      {listName && (
        <Stack flexDirection="row" marginTop={8}>
          <Text color="#ffffff" fontSize={9}>
            {listName}
          </Text>
        </Stack>
      )}

      {dueDate && (
        <Text
          color={formattedDate === 'Yesterday' ? '#ff1b1b' : '#a4a4a4'}
          fontSize={9}
          fontStyle={formattedDate === 'Yesterday' ? 'italic' : 'normal'}
          position="absolute"
          right={16}
          top="50%"
        >
          {formattedDate}
        </Text>
      )}
    </Stack>
  )
}
