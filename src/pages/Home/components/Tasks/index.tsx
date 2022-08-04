import { TasksContainer, TasksList } from './styles';

type Task = {
  text: string;
  isFinished: boolean;
};

const tasks: Task[] = [
  {
    text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isFinished: false,
  },
  {
    text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isFinished: false,
  },
  {
    text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isFinished: false,
  },
  {
    text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isFinished: true,
  },
];

export const Tasks = () => (
  <TasksContainer>
    <header>
      <p>
        Tarefas criadas<span>0</span>
      </p>
      <p>
        Concluídas<span>0</span>
      </p>
    </header>

    <TasksList>
      {tasks.map(task => (
        <p>{JSON.stringify(task, null, 2)}</p>
      ))}
    </TasksList>
  </TasksContainer>
);
