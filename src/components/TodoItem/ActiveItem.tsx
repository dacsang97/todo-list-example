import React from 'react';
import { TodoItemProps } from './index';

export default ({ todo }: TodoItemProps) => {
  return <div>{todo.title} - active</div>;
};
