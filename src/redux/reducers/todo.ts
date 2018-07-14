import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import types, { ITodoState } from '../types/todo';

const INITIAL_STATE: ITodoState = fromJS({
  loading: true,
  todos: [],
  errors: null,
});

export default handleActions(
  {
    [types.GET_TODO_REQUEST]: state => {
      return state.set('loading', true);
    },
    [types.GET_TODO_SUCCESSFUL]: (state, { payload }) => {
      return state.set('todos', fromJS(payload)).set('loading', false);
    },
    [types.GET_TODO_FAILURE]: (state, { payload }) => {
      return state.set('errors', fromJS(payload)).set('loading', false);
    },
  },
  INITIAL_STATE,
);
