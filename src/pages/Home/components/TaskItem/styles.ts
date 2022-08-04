import styled from 'styled-components';

export const TaskItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  background-color: ${({ theme }) => theme['gray-500']};
  border-radius: 8px;

  input {
    margin-right: 1.313rem;
    width: 1.125rem;
    height: 1.125rem;
    margin-top: 4px;
  }

  label {
    color: ${({ theme }) => theme['gray-100']};
    font-size: 0.875rem;
    margin-right: 1.313rem;
  }

  button {
    background-color: transparent;
    border: none;

    svg {
      fill: gray;
      transition: 0.2s all;
      border-radius: 4px;
    }

    :hover {
      svg {
        background-color: ${({ theme }) => theme['gray-400']};
        fill: ${({ theme }) => theme['red-500']};
      }
    }
  }
`;
