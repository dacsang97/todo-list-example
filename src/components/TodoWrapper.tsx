import React from 'react';
import { List } from 'immutable';
import { branch, renderComponent } from 'recompose';
import Spinner from './Spinner';
import { ITodoState } from '../redux/types/todo';
import { ActiveList, CompletedList } from '../components/FilterTodo';
import { Todo as TodoType } from '../constants/types';

interface Props extends ITodoState {}

const isLoading = ({ loading }: Props) => loading;

const enhance = branch(isLoading, renderComponent(Spinner));

export interface ITodoProps {
  todos: List<TodoType>;
}

const TodoWrapper = ({ todos }: ITodoProps) => {
  const data = todos.toJS();
  return (
    <div>
      <ActiveList todos={data} />
      <CompletedList todos={data} />
    </div>
  );
};

export default enhance(TodoWrapper);
