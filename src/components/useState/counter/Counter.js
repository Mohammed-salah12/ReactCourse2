import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };
  const decrementCounter = () => {
    setCount(count - 1);
  };
  const ResetCounter = () => {
    setCount(0);
  };
  return (
    <div className="counterContainerDiv">
      <div>
        <button onClick={incrementCounter}>increment counter by 1 </button>
        <button onClick={decrementCounter}>decrement counter by 1 </button>
        <button onClick={ResetCounter}>reset counter by 1 </button>
        <h1> {count}</h1>
      </div>
    </div>
  );
};
