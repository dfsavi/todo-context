import * as React from 'react';
import { TodoContextType, ITodo } from '../@types/todo';
import { TodoContext } from '../context/todoContext';
import Todo from '../components/Todo';

const Todos = () => {
  const { todos, completeTodo } = React.useContext(TodoContext) as TodoContextType;
  return (
    <div>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} todo={todo} completeTodo={completeTodo} />
      ))}
    </div>
  );
}

export default Todos;
