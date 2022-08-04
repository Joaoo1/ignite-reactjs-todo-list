import { Trash } from '../../../../assets/Trash';
import { TaskItemContainer } from './styles';

type TaskProps = {
  id: string;
  text: string;
  // isFinished: boolean;
  onDeleteTask: () => void;
};

export const TaskItem = ({ id, text, onDeleteTask }: TaskProps) => (
  <TaskItemContainer>
    <input type="radio" name="" id={id} onChange={() => {}} />
    <label htmlFor={id}>{text}</label>
    <button type="button" onClick={onDeleteTask}>
      <Trash />
    </button>
  </TaskItemContainer>
);
