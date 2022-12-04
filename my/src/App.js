import { useEffect, useRef, useState } from 'react';
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [autoCount, setAutoCount] = useState(0);
  const [halfAutoCount, setHalfAutoCount] = useState(0);
  const intervalid = useRef(null);

  useEffect(() => {
    const intervalid = setInterval(
      ()=> setAutoCount(prev=> prev+1),
      1000
    )
      
    return () => clearInterval(intervalid)
  },[])

  const startCounter = () => (
    intervalid.current = setInterval(
      () => setHalfAutoCount((prev)=>prev+1), 400)
    
  )

  const stopCounter = () => {
    clearInterval(intervalid.current)
  }
  
  return (
    <div>
      
      <div className="background">
        
        <p>{count}</p>

      <button className="button1" onClick={() => setCount((prev) => prev+1)}>
        CLICK
      </button>
      
      </div>

      <div className="background">
      
      <div>{autoCount}</div>
      
      </div>

      <div className="background">
      
      <div>{halfAutoCount}</div>
      
      </div>
      
      <div className="background">
      
      <div className="buttongroup">
      
      <button className="button1" onClick={startCounter}>
        START
      </button>
      
      <button className="button2" onClick={stopCounter}>
        STOP
      </button>
      
      </div>
      
      </div>
      
    </div>
  );
}

export default App;
