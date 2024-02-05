export interface ITodo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export type TodoContextType = {
  todos: ITodo[];
  saveTodo: (todo: iTodo) => void;
  completeTodo: (todo: iTodo) => void;
};
