
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppInline from './App-w-functions-inline';
import AppObjects from './App-w-objects';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppInline />
    <AppObjects />
  </React.StrictMode>,
  document.getElementById('root')
);

