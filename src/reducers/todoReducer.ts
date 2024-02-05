import { ITodo } from "../@types/todo";
import { TodoAction } from "../@types/todo";

const todoReducer = (state: ITodo[], action: TodoAction): ITodo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'COMPLETE_TODO':
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: true };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todoReducer;
