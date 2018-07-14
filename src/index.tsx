import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './redux';

const store = configureStore();

const appContainer = document.getElementById('app');

const App = () => (
  <Provider store={store}>
    <h1>Hello World</h1>
  </Provider>
);

render(<App />, appContainer);
