import * as React from 'react';
import { TodoAction, ITodo } from '../@types/todo';
import todoReducer from '../reducers/todoReducer';

export const TodoContext = React.createContext<{
  todos: ITodo[];
  dispatch: React.Dispatch<TodoAction>;
} | null>(null);

export const useTodoContext = () => {
  const context = React.useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todos, dispatch] = React.useReducer(todoReducer, [
    { id: 1, title: 'Learn React', description: "Example desc", completed: true },
    { id: 2, title: 'Learn TypeScript', description: "description", completed: false }
  ]);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;

