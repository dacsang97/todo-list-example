export type TodoStatusType = 'todo' | 'doing' | 'done';

export interface Todo {
  id: string;
  title: string;
  status: TodoStatusType;
}
