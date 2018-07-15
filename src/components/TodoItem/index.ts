import { Todo } from '../../constants/types';

export interface TodoItemProps {
  todo: Todo;
  onClick: any;
}

export { default as ActiveItem } from './ActiveItem';

export { default as CompletedItem } from './CompletedItem';
