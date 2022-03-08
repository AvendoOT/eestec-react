import React from "react";

export const Counter = () => {
  const [counter, setCounter] = React.useState<number>(0);

  const handleMinus = () => {
    setCounter((prevState => prevState - 1));
  };

  const handlePlus = () => {
    setCounter((prevState => prevState + 1));
  }

  const handleZero = () => {
   setCounter(0);
  }

  return (
      <div>
        Counter value : <p>{counter}</p>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
        <button onClick={handleZero}>0</button>
      </div>
  )
}
