import { useState } from 'react';
import logo from '../../assets/logo.svg';
import plus from '../../assets/plus.svg';
import { useTasks } from '../../hooks/useTasks';
import { Tasks } from './components/Tasks';
import { CreateButton, Header, Input, InputContainer } from './styles';

export const Home = () => {
  const [newTaskText, setNewTaskText] = useState('');

  const { createTask } = useTasks();

  function handleCreateTask() {
    if (newTaskText) {
      createTask(newTaskText);
      setNewTaskText('');
    }
  }

  return (
    <>
      <Header>
        <img src={logo} alt="Foguete a esquerda e escrito todo a direita" />

        <InputContainer>
          <Input
            placeholder="Adicione uma nova tarefa"
            onChange={e => setNewTaskText(e.target.value)}
            value={newTaskText}
          />
          <CreateButton onClick={handleCreateTask}>
            <p>Criar</p>
            <img
              src={plus}
              alt="Ícone com um circulo e um sinal de mais dentro"
            />
          </CreateButton>
        </InputContainer>
      </Header>

      <Tasks />
    </>
  );
};
