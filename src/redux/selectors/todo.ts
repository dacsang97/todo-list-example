import { createSelector } from 'reselect';
import { ITodoState } from '../types/todo';

export const todoState = (state: any) => state.get('todo');

export const todoSelector = createSelector([todoState], (todo: ITodoState) => {
  return todo.get('todos');
});
