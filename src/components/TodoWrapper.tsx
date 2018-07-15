import React from 'react';
import { List } from 'immutable';
import { branch, renderComponent } from 'recompose';
import Spinner from './Spinner';
import { ITodoState } from '../redux/types/todo';
import { ActiveList, CompletedList } from '../components/FilterTodo';
import { Todo as TodoType } from '../constants/types';
import { ActiveItem, CompletedItem, TodoItemProps } from './TodoItem';

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
      <ActiveList
        todos={data}
        render={({ todo }: TodoItemProps) => {
          return <ActiveItem key={todo.id} todo={todo} />;
        }}
      />
      <CompletedList
        todos={data}
        render={({ todo }: TodoItemProps) => {
          return <CompletedItem key={todo.id} todo={todo} />;
        }}
      />
    </div>
  );
};

export default enhance(TodoWrapper);
