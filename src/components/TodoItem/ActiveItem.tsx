import React from 'react';
import { TodoItemProps, ItemWrapper } from './index';

export default ({ todo, onClick }: TodoItemProps) => {
  return (
    <ItemWrapper type="active" onClick={onClick}>
      {todo.title}
    </ItemWrapper>
  );
};
