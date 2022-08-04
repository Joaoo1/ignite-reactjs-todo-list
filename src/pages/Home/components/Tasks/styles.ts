import styled from 'styled-components';

export const TasksContainer = styled.main`
  width: 100%;
  max-width: 46rem;
  margin: 5.688rem auto;
  padding-inline: 1rem;

  > header {
    display: flex;
    justify-content: space-between;

    p,
    span {
      font-weight: bold;
      font-size: 0.875rem;
    }

    span {
      margin-left: 8px;
    }

    span {
      border-radius: 999px;
      background-color: ${({ theme }) => theme['gray-400']};
      color: ${({ theme }) => theme['gray-200']};
      padding: 2px 8px;
    }

    p:first-child {
      color: ${({ theme }) => theme['blue-500']};
    }

    p:last-child {
      color: ${({ theme }) => theme['purple-500']};
    }
  }
`;

export const TasksList = styled.div`
  margin-top: 1.5rem;
  border-top: 2px solid ${({ theme }) => theme['gray-400']};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
