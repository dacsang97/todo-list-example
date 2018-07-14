import { createActions } from 'redux-actions';
import types from '../types/todo';

import todos from '../../constants/data';

const { changeStatus, addTodo, getTodoSucessful, getTodoFailure, getTodoRequest } = createActions(
  {
    [types.CHANGE_STATUS]: (id, status) => ({ id, status }),
    [types.ADD_TODO]: title => title,
    [types.GET_TODO_SUCCESSFUL]: todos => todos,
    [types.GET_TODO_FAILURE]: errors => errors,
  },
  types.GET_TODO_REQUEST,
);

export const getAllTodos = () => {
  return (dispatch: any) => {
    dispatch(getTodoRequest());
    setTimeout(() => {
      dispatch(getTodoSucessful(todos));
    }, 2000);
  };
};

export { changeStatus, addTodo };
