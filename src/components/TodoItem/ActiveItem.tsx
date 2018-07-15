import React from 'react';
import { TodoItemProps } from './index';

export default ({ todo, onClick }: TodoItemProps) => {
  return <div onClick={onClick}>{todo.title} - active</div>;
};
