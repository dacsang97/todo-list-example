import React from 'react';
import { branch, renderComponent } from 'recompose';
import Spinner from './Spinner';
import { ITodoState } from '../redux/types/todo';

interface Props extends ITodoState {}

const isLoading = ({ loading }: Props) => loading;

const enhance = branch(isLoading, renderComponent(Spinner));

const TodoWrapper = () => <h1>Da load data xong</h1>;

export default enhance(TodoWrapper);
