import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { todoSelector } from '../redux/selectors/todo';
import { getAllTodos, addTodo, changeStatus } from '../redux/actions/todo';
import { ITodoState } from '../redux/types/todo';
import TodoWrapper from '../components/TodoWrapper';
import InputForm from '../components/InputForm';

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
      <div>
        <h1>Todo List</h1>
        <InputForm onAddTodo={(value: string) => this.props.addTodo(value)} />
        <TodoWrapper {...this.props} />
      </div>
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
