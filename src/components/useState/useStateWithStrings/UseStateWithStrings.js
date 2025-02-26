import React, { useState } from "react";

export const UseStateWithStrings = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
    console.log(input);
  };
  return (
    <div className="UseStateWithStringsContainerDiv">
      <input type="text" name="input" onChange={handleChange} />
      <p>{input}</p>
    </div>
  );
};
