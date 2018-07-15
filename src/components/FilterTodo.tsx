import React from 'react';
import { mapProps, lifecycle } from 'recompose';
import styled from 'styled-components';
import { TodoStatusType, Todo } from '../constants/types';
import { TodoItemProps } from './TodoItem/index';

interface Props {
  status?: TodoStatusType;
  todos: Todo[];
  render?: any;
}

const Wrapper = styled.div`
  margin-bottom: 2rem;
  .title {
    font-size: 18px;
    font-weight: 300;
    text-transform: uppercase;
    color: #323643;
    margin-bottom: 0.25rem;
    border: 1px dashed #dedede;
    margin-bottom: 1rem;
    padding: 3px 5px;
    border-radius: 5px;
  }
`;

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
    if (nextProps.todos.length !== oldTodos.length) return true;
    let shouldUpdate = false;
    nextProps.todos.forEach((todo, id) => {
      if (todo.id !== oldTodos[id].id) return (shouldUpdate = true);
    });
    return shouldUpdate;
  },
});

const TodoList = enhance(({ status, todos, render }: Props) => {
  return (
    <Wrapper>
      <div>
        <span className="title">{status}</span>
      </div>
      <div>{todos.map(todo => render({ todo } as TodoItemProps))}</div>
    </Wrapper>
  );
});

const ActiveList = filterByStatus('active')(TodoList);
const CompletedList = filterByStatus('completed')(TodoList);

export { ActiveList, CompletedList, TodoList };
