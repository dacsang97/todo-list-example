import React from 'react';
import { mapProps } from 'recompose';
import { TodoStatusType, Todo } from '../constants/types';

interface Props {
  status: TodoStatusType;
  todos: Todo[];
}

const filterByStatus = (status: TodoStatusType) =>
  mapProps(({ todos }: Props) => {
    return {
      status,
      todos: todos.filter(todo => todo.status === status),
    };
  });

const TodoList = ({ status, todos }: Props) => {
  console.log(todos);
  return (
    <div>
      <h1>{status}</h1>
      <ul>{todos.map(todo => <li key={todo.id}>{todo.title}</li>)}</ul>
    </div>
  );
};

const Todo = filterByStatus('todo')(TodoList);
const Doing = filterByStatus('doing')(TodoList);
const Done = filterByStatus('done')(TodoList);

export { Todo, Doing, Done };
