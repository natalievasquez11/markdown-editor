import React from 'react';
import App from './App';
import store from './redux/store/index';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

