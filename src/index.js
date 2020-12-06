
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppInline from './App-w-functions-inline';
import AppObjects from './App-w-objects';
import AppEmail from './App-email'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppObjects />
    <AppInline />
    <AppEmail />
  </React.StrictMode>,
  document.getElementById('root')
);

