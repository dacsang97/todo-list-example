export type TodoStatusType = 'active' | 'completed';

export interface Todo {
  id: string;
  title: string;
  status: TodoStatusType;
}
