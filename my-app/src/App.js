import {useEffect, useState, useRef} from 'react';

const App =() => {
  const [count, setCount] = useState(0);
  const [autoCount, setAutoCount] = useState(0);
  const [halfAutoCount, setHalfAutoCount] = useState(0);
  const intervalId = useRef(null);
  const flexStyle = {
    width: "100vw", 
    height:"100vh", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    flexDirection: "column", 
  };

  const boxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    flexDirection: "column",
    aspectRatio: 1/1,
    width: "250px",
    margin: "20px",
    backgroundColor: "#FAEBD7",
    borderRadius: "15px",
    fontSize: "22px",
    fontWeight: "700",
  };

  const buttonStyle = {
    backgroundColor: "#FF6347", 
    borderRadius: "10px", 
    border: "none", 
    color: "white", 
    width: "100px", 
    height: "40px", 
    margin: "10px",
  };

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
    <div style={flexStyle}>
      <div style={boxStyle}>
        <p>{count}</p>
        <button onClick={() => setCount((prev) => prev+1)} style={buttonStyle}>CLICK</button>
      </div>
      <div style={boxStyle}>
        <div>{autoCount}</div>
      </div>
      <div style={boxStyle}>
        <div>{halfAutoCount}</div>
        <div>
          <button 
            onClick={startCounter} 
            style={{
              backgroundColor: "#FF6347", 
              borderRadius: "10px", 
              border: "none", 
              color: "white", 
              width: "100px", 
              height: "40px", 
              margin: "10px",
          }}>
            START
          </button>
          <button 
            onClick={stopCounter} 
            style={{
              backgroundColor: "#708090", 
              borderRadius: "10px", 
              border: "none", 
              color: "white", 
              width: "100px", 
              height: "40px", 
              margin: "10px",
          }}>
            STOP
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
