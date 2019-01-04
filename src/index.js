//3rd party dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; //note: lower case.

//my own code
import App from './components/App.js';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
  <App />
</Provider>,  //why </Provider> and not <Provider />
  document.querySelector('#root')
);
