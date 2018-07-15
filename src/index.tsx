import { render } from 'react-dom';
import React from 'react';
import { injectGlobal } from 'styled-components';
import { Provider } from 'react-redux';
import configureStore from './redux';
import TodoList from './containers/TodoList';

const store = configureStore();

injectGlobal`
* {
margin: 0;
padding: 0;

  :focus {
    outline: 0;
  }
}

body {
  background-color: #eef0f5;
  padding-top: 50px;
  font-family: 'Nunito', sans-serif;
  color: #333745;
  display: flex;
  flex-direction: column;
}
`;

const appContainer = document.getElementById('app');

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

render(<App />, appContainer);
