import React from 'react';
import { branch, renderComponent } from 'recompose';
import Spinner from './Spinner';
import { ITodoState } from '../redux/types/todo';
import { ActiveList, CompletedList } from '../components/FilterTodo';
import { ActiveItem, CompletedItem, TodoItemProps } from './TodoItem';
import { TodoListProps } from '../containers/TodoList';

interface Props extends ITodoState {}

const isLoading = ({ loading }: Props) => loading;

const enhance = branch(isLoading, renderComponent(Spinner));

const TodoWrapper = ({ todos, changeStatus }: TodoListProps) => {
  const data = todos.toJS();
  return (
    <div>
      <ActiveList
        todos={data}
        render={({ todo }: TodoItemProps) => {
          return (
            <ActiveItem
              key={todo.id}
              todo={todo}
              onClick={() => {
                console.log('ahihi');
                console.log(changeStatus);
                changeStatus(todo.id, 'completed');
              }}
            />
          );
        }}
      />
      <CompletedList
        todos={data}
        render={({ todo }: TodoItemProps) => {
          return (
            <CompletedItem
              key={todo.id}
              todo={todo}
              onClick={() => changeStatus(todo.id, 'active')}
            />
          );
        }}
      />
    </div>
  );
};

export default enhance(TodoWrapper);
