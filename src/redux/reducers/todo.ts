import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import types, { ITodoState } from '../types/todo';

const INITIAL_STATE: ITodoState = fromJS({
  loading: false,
  todos: [],
  errors: null,
});

export default handleActions(
  {
    [types.GET_TODO_REQUEST]: state => {
      console.log('xxx');
      return state.set('loading', true);
    },
  },
  INITIAL_STATE,
);
