
import './App.css';
import React,  { useState } from 'react';

function App() {
 
  // const [count, changeCounter] = useState(() => {
  //   return 0
  // })
  // const [count, setCount] = useState(0)
  const [count, setCount] = useState(() => 0)


  return (
    <div className="App">
      <button onClick={() => setCount(currentCount => currentCount - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
    </div>
  );
}

export default App;

