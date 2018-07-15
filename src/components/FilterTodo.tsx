import React from 'react';
import { mapProps, lifecycle } from 'recompose';
import { TodoStatusType, Todo } from '../constants/types';

interface Props {
  status?: TodoStatusType;
  todos: Todo[];
}

const filterByStatus = (status: TodoStatusType) =>
  mapProps<Props, any>(({ todos }: Props) => {
    return {
      status,
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

const TodoList = ({ status, todos }: Props) => {
  return (
    <div>
      <h1>{status}</h1>
      <ul>{todos.map(todo => <li key={todo.id}>{todo.title}</li>)}</ul>
    </div>
  );
};

const Todo = filterByStatus('todo')(enhance(TodoList));
const Doing = filterByStatus('doing')(enhance(TodoList));
const Done = filterByStatus('done')(enhance(TodoList));

export { Todo, Doing, Done };
