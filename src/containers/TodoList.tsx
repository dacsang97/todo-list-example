import React, { PureComponent } from 'react';
import { branch, renderComponent } from 'recompose';
import { connect } from 'react-redux';
import { todoSelector } from '../redux/selectors/todo';
import { getAllTodos, addTodo, changeStatus } from '../redux/actions/todo';
import { ITodoState } from '../redux/types/todo';
import Spinner from '../components/Spinner';
import TodoWrapper from '../components/TodoWrapper';
import InputForm from '../components/InputForm';

const isLoading = ({ loading }: Props) => loading;

const withLoading = branch(isLoading, renderComponent(Spinner));

interface Props extends ITodoState {
  getAllTodos: any;
  addTodo: any;
  changeStatus: any;
}

class TodoList extends PureComponent<Props> {
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
