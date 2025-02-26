import React, { useMemo, useState } from "react";

export const ReactWithUseMemo = () => {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    console.log("computing...");
    return count * 2;
  }, [count]);

  return (
    <div>
      <h1>result {result}</h1>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};
