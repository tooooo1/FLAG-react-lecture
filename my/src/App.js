import { useEffect, useRef, useState} from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [autoCount, setAutoCount] = useState(0);
  const [halfAutoCount, setHalfAutoCount] = useState(0);
  const intervalId = useRef(null);


useEffect(()=>{
  const intervalId = setInterval(
    ()=> setAutoCount(prev=> prev+1),
    1000
  )
  return() => clearInterval(intervalId)
},[])

const startCounter = () => {
  intervalId.current = setInterval(
  () => setHalfAutoCount((prev)=>prev+1),
  400
)}


const stopCounter = () => {
  clearInterval(intervalId.current)
}

return(
  <div className='App'>

    <div className='box'>
    <p className='num'>{count}</p>
    <button className="btn"  onClick={()=> setCount((prev) => prev+1)}>
      CLICK
    </button>
    </div>

    <div className='box'>
    <div className='num'>{autoCount}</div>
    </div>

    <div className='box'>
    <div className='num'>{halfAutoCount}</div>
    <button className='btn' onClick me={startCounter}>
    START
    </button>
    <button className='btn' onClick ={stopCounter}>
      STOP
    </button>
    </div>

  </div>
);
}
export default App;

