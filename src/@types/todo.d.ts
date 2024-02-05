export interface ITodo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export type TodoAction =
  | { type: 'ADD_TODO'; payload: ITodo }
  | { type: 'COMPLETE_TODO'; payload: number };

export type TodoContextType = {
  todos: ITodo[];
  saveTodo: (todo: iTodo) => void;
  completeTodo: (todo: iTodo) => void;
};
