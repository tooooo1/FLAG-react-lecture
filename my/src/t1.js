import {useEffect, useState, useRef} from 'react';
import "./t1.css";
import React from 'react';

const App=() => {
  const [count, setCount] = useState(0);
  const [autoCount, setAutoCount] = useState(0);
  const [halfAutoCount, setHalfAutoCount] = useState(0);
  const intervalId = useRef(null);

  useEffect(()=>{
    const intervalId = setInterval(
    ()=> setAutoCount(prev => prev+1),
    1000
    )
    return ()=> clearInterval(intervalId)
  },[])

  const startCounter = () => {
    intervalId.current = setInterval(
      () => setHalfAutoCount((prev)=>prev+1),
      400
    )
  }

  const stopCounter = () => {
      clearInterval(intervalId.current)
  }



  return (
    <div class = "body1">
    <div>
      <div class = "box1">
      <p>{count}</p>
      <button class = "orangebutton" onClick={() => setCount((prev) => prev+1)}>
        click
      </button>
      </div>
      <div class = "box1">
      <div>{autoCount}</div>
      </div>
      <div class = "box1">
      <div>{halfAutoCount}</div>
      <div class = "buttongroup">
      <button class = "orangebutton" onClick={startCounter}>
        START
      </button>
      <button class = "graybutton" onClick={stopCounter}>
        STOP
      </button>
      </div>
      </div>
      
    </div>
    </div>
  );
}

export default App;