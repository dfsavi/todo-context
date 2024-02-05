import * as React from 'react';
import { ITodo } from '../@types/todo';

type Props = {
  todo: ITodo;
  completeTodo: (id: number) => void;
};

const Todo: React.FC<Props> = ({ todo, completeTodo }) => {
  const checkTodo: string = todo.completed ? `line-through` : '';
  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={checkTodo}>{todo.title}</h1>
        <span className={checkTodo}>{todo.description}</span>
      </div>
      <button onClick={() => completeTodo(todo.id)} className={todo.completed ? `hide-button` : 'Card--button'}>
        Complete
      </button>
    </div>
  );
};

export default Todo;
