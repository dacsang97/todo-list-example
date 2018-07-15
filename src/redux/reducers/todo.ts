import { fromJS, List } from 'immutable';
import { handleActions } from 'redux-actions';
import shortid from 'shortid';
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
    [types.ADD_TODO]: (state, { payload }) => {
      return state.update('todos', List(), (todos: any) =>
        todos.push(fromJS({ id: shortid.generate(), title: payload, status: 'active' })),
      );
    },
    [types.CHANGE_STATUS]: (state, { payload }) => {
      return state.update('todos', List(), (todos: any) => {
        return todos.update(
          todos.findIndex((todo: any) => todo.get('id') === payload!.id),
          (todo: any) => {
            return todo.set('status', payload!.status);
          },
        );
      });
    },
  },
  INITIAL_STATE,
);
