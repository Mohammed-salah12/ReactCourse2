import React, { useCallback, useState } from "react";
import { IncrementButton } from "../common/IncrementButton";

export const ReactWithUseCallback = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const incrementCounter = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <IncrementButton handleIncrimination={incrementCounter} />
      <p>{count}</p>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
    </div>
  );
};
