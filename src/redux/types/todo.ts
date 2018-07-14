import { Todo } from '../../constants/types';

export const GET_TODO_REQUEST = 'GET_TODO_REQUEST';

export const GET_TODO_SUCCESSFUL = 'GET_TODO_SUCCESSFUL';

export const GET_TODO_FAILURE = 'GET_TODO_FAILURE';

export const CHANGE_STATUS = 'CHANGE_STATUS';

export const ADD_TODO = 'ADD_TODO';

export interface ITodoState extends Record<string, any> {
  loading: boolean;
  errors: any;
  todos: Todo[];
}

export default {
  GET_TODO_REQUEST,
  GET_TODO_SUCCESSFUL,
  GET_TODO_FAILURE,
  CHANGE_STATUS,
  ADD_TODO,
};
