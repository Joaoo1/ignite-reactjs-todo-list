import { NoTasksFound } from '../NoTasksFound';
import { TaskItem } from '../TaskItem';
import { TasksContainer, TasksList } from './styles';

type Task = {
  id: string;
  text: string;
  isFinished: boolean;
};

const tasks: Task[] = [
  {
    id: 'asd',
    text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isFinished: false,
  },
  {
    id: 'asd1',
    text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isFinished: false,
  },
  {
    id: 'asd2',
    text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isFinished: false,
  },
  {
    id: 'asd3',
    text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isFinished: true,
  },
  {
    id: 'asd',
    text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isFinished: false,
  },
  {
    id: 'asd1',
    text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isFinished: false,
  },
  {
    id: 'asd2',
    text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isFinished: false,
  },
  {
    id: 'asd3',
    text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isFinished: true,
  },
];

export const Tasks = () => (
  <TasksContainer>
    <header>
      <p>
        Tarefas criadas<span>{tasks.length}</span>
      </p>
      <p>
        Concluídas<span>{tasks.filter(t => t.isFinished).length}</span>
      </p>
    </header>

    <TasksList>
      {tasks && tasks.length > 0 ? (
        tasks.map(task => (
          <TaskItem text={task.text} id={task.id} onDeleteTask={() => {}} />
        ))
      ) : (
        <NoTasksFound />
      )}
    </TasksList>
  </TasksContainer>
);
