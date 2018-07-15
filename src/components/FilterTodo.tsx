import React from 'react';
import { mapProps, lifecycle } from 'recompose';
import { TodoStatusType, Todo } from '../constants/types';
import { TodoItemProps } from './TodoItem/index';

interface Props {
  status?: TodoStatusType;
  todos: Todo[];
  render?: any;
}

const filterByStatus = (status: TodoStatusType) =>
  mapProps<Props, any>(({ todos, render }: Props) => {
    return {
      status,
      render,
      todos: todos.filter(todo => todo.status === status),
    };
  });

const enhance = lifecycle<Props, any>({
  shouldComponentUpdate(nextProps: Props) {
    const oldTodos = this.props.todos;
    let shouldUpdate = false;
    nextProps.todos.forEach((todo, id) => {
      if (!oldTodos[id]) {
        return (shouldUpdate = true);
      }
      if (todo.id !== oldTodos[id].id) return (shouldUpdate = true);
    });
    return shouldUpdate;
  },
});

const TodoList = enhance(({ status, todos, render }: Props) => {
  console.log('RENDER AT:', status);
  return (
    <div>
      <h1>{status}</h1>
      <ul>{todos.map(todo => render({ todo } as TodoItemProps))}</ul>
    </div>
  );
});

const ActiveList = filterByStatus('active')(TodoList);
const CompletedList = filterByStatus('completed')(TodoList);

export { ActiveList, CompletedList, TodoList };
