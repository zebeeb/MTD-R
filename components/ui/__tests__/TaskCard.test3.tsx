
import { render } from '@/utils/test-utils'
import { TaskCard } from '../TaskCard'

describe('TaskCard', () => {
  it('renders the title correctly', () => {
    const { getByText } = render(<TaskCard title="Test Task" />)
    expect(getByText('Test Task')).toBeTruthy()
  })

  it('renders the list name when provided', () => {
    const { getByText } = render(
      <TaskCard title="Test Task" listName="Work" />
    )
    expect(getByText('Work')).toBeTruthy()
  })

  it('formats today\'s date correctly', () => {
    const today = new Date()
    const { getByText } = render(
      <TaskCard title="Test Task" dueDate={today.toISOString()} />
    )
    expect(getByText('Today')).toBeTruthy()
  })
})
