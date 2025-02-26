import React, { useEffect } from "react";
import { useState } from "react";
export const ReactWithUseEffect = () => {
  const [counter, setCounter] = useState(0);
//   https://jsonplaceholder.typicode.com/posts
  useEffect(() => {
    //here you should put the code that you want to run it on mount
    console.log("counter", counter);

    return () => {
      console.log("I am being cleaned up ");
      // here is the optional cleanup function that will be called when destroying the component
    };
  }, [counter]); // that is the dependency array is used to listen for changes for the value if the dependency changes array is filled with data it will run on its update (componentDidUpdate)
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>increment by 1</button>
      <button onClick={() => setCounter(counter - 1)}>decrement by 1</button>
      <p>{counter}</p>
    </div>
  );
};
