import styled, { StyledComponentClass } from 'styled-components';
import { Todo } from '../../constants/types';
import colors from '../../constants/colors';

export const ItemWrapper = styled.div`
  padding: 10px;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  margin: 15px auto;
  color: ${props => (props.type === 'active' ? colors.DARK_GREY : '#33374582')};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  text-decoration: ${props => (props.type === 'active' ? 'none' : 'line-through')}
  :hover {
    box-shadow: 0px 2px 20px 1px #d2d2d24a;
    text-decoration: ${props => (props.type === 'active' ? 'line-through' : 'none')};
  }
` as StyledComponentClass<TodoItemProps, any, any>;

export interface TodoItemProps {
  todo: Todo;
  onClick?: any;
  type?: string;
}

export { default as ActiveItem } from './ActiveItem';

export { default as CompletedItem } from './CompletedItem';
