import { combineReducers } from 'redux-immutable';
import todo from './todo';

export default combineReducers<any, any>({
  todo,
});
