import * as React from 'react';
import { TodoContextType, ITodo } from '../@types/todo';

export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todos, setTodos] = React.useState<ITodo[]>([
    { id: 1, title: 'Learn React', description: "Example desc", completed: true },
    { id: 2, title: 'Learn TypeScript', description: "description", completed: false }
  ]);
  const saveTodo = (todo: ITodo) => {
    const newTodo = { ...todo, id: todos.length + 1 };
    setTodos([...todos, newTodo]);
  }
  const completeTodo = (id: number) => {
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.completed = true;
        setTodos([...todos]);
        return true;
      } else { return false }
    });
  };
  return (
    <TodoContext.Provider value={{ todos, saveTodo, completeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;

