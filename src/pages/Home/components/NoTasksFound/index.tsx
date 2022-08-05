import clipboard from '../../../../assets/clipboard.png';
import { NoTasksFoundContainer } from './styles';

export const NoTasksFound = () => (
  <NoTasksFoundContainer>
    <img src={clipboard} alt="Prancheta" />
    <b>Você ainda não tem tarefas cadastradas</b>
    <p>Crie tarefas e organize seus itens a fazer</p>
  </NoTasksFoundContainer>
);
