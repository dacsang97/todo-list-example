import React, { PureComponent } from 'react';
import { branch, renderComponent } from 'recompose';
import { connect } from 'react-redux';
import { todoSelector } from '../redux/selectors/todo';
import { getAllTodos, addTodo } from '../redux/actions/todo';
import { ITodoState } from '../redux/types/todo';
import Spinner from '../components/Spinner';
import TodoWrapper from '../components/TodoWrapper';

const isLoading = ({ loading }: Props) => loading;

const withLoading = branch(isLoading, renderComponent(Spinner));

interface Props extends ITodoState {
  getAllTodos: any;
  addTodo: any;
}

class TodoList extends PureComponent<Props> {
  componentDidMount() {
    this.props.getAllTodos();
  }
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <button onClick={() => this.props.addTodo('xxx', 'doing')}>ADD TODO</button>
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
  { getAllTodos, addTodo },
)(TodoList);
