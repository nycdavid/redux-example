import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './components/App.jsx';

function inputTextState(state, action) {
  switch (action.type) {
    case 'INPUT_TEXT_CHANGE':
      return { inputText: action.text };
    default:
      return { inputText: '' };
  }
}

const masterReducer = combineReducers({ inputTextState });
const store = createStore(masterReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('redux-app')
)
