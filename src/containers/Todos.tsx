import * as React from 'react';
import { ITodo } from '../@types/todo';
import { useTodoContext } from '../context/todoContext';
import Todo from '../components/Todo';

const Todos = () => {
  const { todos, dispatch } = useTodoContext()
  return (
    <>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} todo={todo} completeTodo={() => dispatch({ type: 'COMPLETE_TODO', payload: todo.id })} />
      ))}
    </>
  );
}

export default Todos;
