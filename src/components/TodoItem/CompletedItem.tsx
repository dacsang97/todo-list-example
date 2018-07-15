import React from 'react';
import { TodoItemProps, ItemWrapper } from './index';

export default ({ todo, onClick }: TodoItemProps) => {
  return (
    <ItemWrapper type="completed" onClick={onClick}>
      {todo.title}
    </ItemWrapper>
  );
};
