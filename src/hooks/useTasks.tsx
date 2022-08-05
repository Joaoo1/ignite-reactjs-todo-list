import { createContext, useContext, useMemo, useState } from 'react';

export type Task = {
  id: string;
  text: string;
  isFinished: boolean;
};

type TaskContextData = {
  tasks: Task[];
  deleteTask: (taskId: string) => void;
  createTask: (text: string) => void;
  toggleTaskStatus: (taskId: string) => void;
};

const TaskContext = createContext({} as TaskContextData);

type TaskProviderProps = {
  children: React.ReactNode;
};

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  function deleteTask(taskId: string) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex > -1) {
      const newArray = [...tasks];
      newArray.splice(taskIndex, 1);
      setTasks(newArray);
    }
  }

  function createTask(text: string) {
    const id = Number(new Date()).toString();
    setTasks(prevState => [...prevState, { id, text, isFinished: false }]);
  }

  function toggleTaskStatus(taskId: string) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex > -1) {
      setTasks(prevState =>
        prevState.map(t => {
          if (t.id === taskId) return { ...t, isFinished: !t.isFinished };

          return t;
        })
      );
    }
  }

  const contextValue = useMemo(
    () => ({
      tasks,
      createTask,
      deleteTask,
      toggleTaskStatus,
    }),
    [tasks]
  );

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }

  return context;
};
