import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux';
import TodoList from './containers/TodoList';

const store = configureStore();

const appContainer = document.getElementById('app');

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

render(<App />, appContainer);
