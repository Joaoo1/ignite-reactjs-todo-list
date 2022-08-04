import logo from '../../assets/logo.svg';
import plus from '../../assets/plus.svg';
import { CreateButton, Header, Input, InputContainer } from './styles';

export const Home = () => (
  <Header>
    <img src={logo} alt="Foguete a esquerda e escrito todo a direita" />

    <InputContainer>
      <Input placeholder="Adicione uma nova tarefa" />
      <CreateButton>
        <p>Criar</p>
        <img src={plus} alt="Ícone com um circulo e um sinal de mais dentro" />
      </CreateButton>
    </InputContainer>
  </Header>
);
