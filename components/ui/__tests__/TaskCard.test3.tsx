
import { render } from '@/utils/test-utils';
import { TaskCard } from '../TaskCard';

describe('TaskCard', () => {
  it('renders the title correctly', () => {
    const { getByText } = render(<TaskCard title="Test Task" />);
    expect(getByText('Test Task')).toBeTruthy();
  });

  it('renders the list name and icon when provided', () => {
    const { getByText } = render(
      <TaskCard 
        title="Test Task" 
        listName="Work" 
        listIcon="💼"
        listColor="#bf2b68"
      />
    );
    expect(getByText('Work')).toBeTruthy();
    expect(getByText('💼')).toBeTruthy();
  });

  it('formats today\'s date correctly', () => {
    const today = new Date().toISOString();
    const { getByText } = render(
      <TaskCard title="Test Task" dueDate={today} />
    );
    expect(getByText('Today')).toBeTruthy();
  });

  it('shows past due dates in red and italic', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    const { getByText } = render(
      <TaskCard title="Test Task" dueDate={yesterday.toISOString()} />
    );
    
    const dateElement = getByText('Yesterday');
    expect(dateElement).toHaveStyle({
      color: '#ff1b1b',
      fontStyle: 'italic'
    });
  });
});
