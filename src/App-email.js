import './App.css';
import React,  { useState } from 'react';
import { traverseTwoPhase } from 'react-dom/test-utils';
import {useForm} from './useForm'

function App() {
 
  // const [count, changeCounter] = useState(() => {
  //   return 0
  // })
  // const [count, setCount] = useState(0)
  
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

    const [values, handleChange] = useForm({email: '', password: ''})



    return (
    <div className="App">
        {/* <input name='email' onChange={ e => setEmail(e.target.value)} placeholder="email" value={email} />
        <input name='password' type='password' onChange={ e => setPassword(e.target.value)} placeholder="password" value={password}/> */}
        <input name='email' onChange={handleChange} placeholder="email" value={values.email} />
        <input name='password' type='password' onChange={handleChange} placeholder="password" value={values.password}/>
    </div>
    );
}

export default App;

