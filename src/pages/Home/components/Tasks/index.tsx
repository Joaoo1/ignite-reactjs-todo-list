import { useTasks } from '../../../../hooks/useTasks';
import { NoTasksFound } from '../NoTasksFound';
import { TaskItem } from '../TaskItem';
import { TasksContainer, TasksList } from './styles';

export const Tasks = () => {
  const { tasks } = useTasks();

  return (
    <TasksContainer>
      <header>
        <p>
          Tarefas criadas<span>{tasks.length}</span>
        </p>
        <p>
          Concluídas
          <span>
            {tasks.filter(t => t.isFinished).length} de {tasks.length}
          </span>
        </p>
      </header>

      <TasksList>
        {tasks.length > 0 ? (
          tasks.map(task => <TaskItem key={task.id} task={task} />)
        ) : (
          <NoTasksFound />
        )}
      </TasksList>
    </TasksContainer>
  );
};
