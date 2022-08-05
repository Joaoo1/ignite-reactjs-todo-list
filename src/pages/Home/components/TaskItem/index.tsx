import { Trash } from '../../../../assets/Trash';
import { Task, useTasks } from '../../../../hooks/useTasks';
import { TaskItemContainer } from './styles';

type TaskProps = {
  task: Task;
};

export const TaskItem = ({ task }: TaskProps) => {
  const { deleteTask, toggleTaskStatus } = useTasks();

  function handleDeleteTask() {
    deleteTask(task.id);
  }

  function handleTaskItemChange() {
    toggleTaskStatus(task.id);
  }

  return (
    <TaskItemContainer>
      <input
        type="checkbox"
        name=""
        id={task.id}
        checked={task.isFinished}
        onChange={handleTaskItemChange}
      />
      <label htmlFor={task.id}>{task.text}</label>
      <button type="button" onClick={handleDeleteTask}>
        <Trash />
      </button>
    </TaskItemContainer>
  );
};
