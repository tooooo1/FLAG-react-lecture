import { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = ()  => {
  const [count, setCount] = useState(0);
  const [autoCount, setAutoCount] = useState(0);
  const [halfAutoCount, sethalfAutoCount] = useState(0);
  const intervalId = useRef(null);

  useEffect(()=> {
    const intervalId = setInterval(
      () => setAutoCount(prev=> prev+1),
      1000
    )
    return () => clearInterval(intervalId)
  },[])

  const startCounter = () => {
    intervalId.current = setInterval (
      () => sethalfAutoCount((prev)=>prev+1),
      400
    )
  }

  const stopCounter = () => {
    clearInterval(intervalId.current)
  }

  return (
    <div>
      <p>You clicked {count} times </p>
      <button onClick= {() => setCount((prev) => prev+1)}>
        Click me
      </button>
      <div>{autoCount}</div>
      <div>{halfAutoCount}</div>
      <button onClick = {startCounter}>
        START
      </button>
      <button onClick = {stopCounter}>
        STOP
      </button>

    </div>
  );
}

export default App;
