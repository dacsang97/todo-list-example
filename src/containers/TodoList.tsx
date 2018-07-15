import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import colors from '../constants/colors';
import { todoSelector } from '../redux/selectors/todo';
import { getAllTodos, addTodo, changeStatus } from '../redux/actions/todo';
import { ITodoState } from '../redux/types/todo';
import TodoWrapper from '../components/TodoWrapper';
import InputForm from '../components/InputForm';

const Container = styled.div`
  background-color: ${colors.WHITE};
  box-shadow: 0px 6px 15px 0px rgba(207, 211, 218, 0.35);
  margin: 0 auto;
  width: 400px;
  border-radius: 5px;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 28px;
  color: ${colors.WHITE}
  text-align: center;
  padding: 10px;
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
`;

export interface TodoListProps extends ITodoState {
  getAllTodos: any;
  addTodo: any;
  changeStatus: any;
}

class TodoList extends PureComponent<TodoListProps> {
  componentDidMount() {
    this.props.getAllTodos();
  }
  render() {
    return (
      <Container>
        <Title>Todo List</Title>
        <InputForm onAddTodo={(value: string) => this.props.addTodo(value)} />
        <TodoWrapper {...this.props} />
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    todos: todoSelector(state),
    loading: state.get('todo').get('loading'),
  };
};

export default connect(
  mapStateToProps,
  { getAllTodos, addTodo, changeStatus },
)(TodoList);
