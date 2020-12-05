
import './App.css';
import React,  { useState } from 'react';

function App() {

  const [state, setState] = useState({ count: 0, objectName: 'bicycles'})
  const count = state.count
  const objectName = state.objectName

  function subtractFromCount() {
    setState(previousState => {
      return {...previousState, count: previousState.count - 1}
    })
  }

  function addToCount() {
    setState(previousState => {
      return {...previousState, count: previousState.count + 1}
    })
  }

  return (
    <div className="App">
      <button onClick={subtractFromCount}>-</button>
      <span>{count} {objectName}</span>
      <button onClick={addToCount}>+</button>
    </div>
  );
}

export default App;

