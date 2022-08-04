import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${({ theme }) => theme['gray-700']};
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;

  > img {
    margin-top: 4.5rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transform: translateY(50%);
  width: 100%;
  max-width: 46rem;
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme['gray-500']};
  border-radius: 8px;
  width: 100%;
  border: none;
  padding: 1rem;
  color: ${({ theme }) => theme['gray-300']};
  align-self: flex-end;

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['purple-800']};
  }
`;

export const CreateButton = styled.button`
  background-color: ${({ theme }) => theme['blue-800']};
  border-radius: 8px;
  color: ${({ theme }) => theme['gray-100']};
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;
  border-color: transparent;
  font-weight: bold;
  font-size: 0.875rem;
  transition: 0.2s background;

  &:hover {
    background-color: ${({ theme }) => theme['blue-500']};
  }
`;
