import * as React from 'react';
import { TodoContext } from '../context/todoContext';
import { TodoContextType, ITodo } from '../@types/todo';

const AddTodo: React.FC = () => {

  const { saveTodo } = React.useContext(TodoContext) as TodoContextType;
  const [formData, setFormData] = React.useState<ITodo | {}>();
  const handleForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
    console.log(formData);
    e.preventDefault();
    saveTodo(formData);
  };
  return (
    <form className="Form" onSubmit={(e) => handleSaveTodo(e, formData)}>
      <div>
        <div>
          <label htmlFor="name">Title</label>
          <input onChange={handleForm} type="text" id="title" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input onChange={handleForm} type="text" id="description" />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false}>Add Todo</button>
    </form>
  );
};

export default AddTodo;
