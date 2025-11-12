import React, { useEffect } from "react";

export const Counter = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  useEffect(() => {
    console.log("count", count);
    // logic will be executed on mount(just like componentDidMount on class component)

    return () => {
      // the code here will be executed before unmounting exactly like (componentWillUnmount function on class component)
    };
  },[count]); // dependency array
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
