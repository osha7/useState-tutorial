
import './App.css';
import React,  { useState } from 'react';

function App() {

  // const [count, changeCounter] = useState(() => {
  //   return 0
  // })
  const [count, changeCounter] = useState(0)
  const [name, changeName] = useState('bicycles')

  function subtractFromCount() {
    changeCounter(previousCount => previousCount - 1)
  }

  function addToCount() {
    changeCounter(previousCount => previousCount + 1)
    changeName('updateName')
  }

  return (
    <div className="App">
      <button onClick={subtractFromCount}>-</button>
      <span>{count} {name}</span>
      <button onClick={addToCount}>+</button>
    </div>
  );
}

export default App;

