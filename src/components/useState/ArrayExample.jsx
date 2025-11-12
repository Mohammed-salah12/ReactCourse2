import React from "react";

export const ArrayExample = () => {
  const [items, setItem] = React.useState(["apple", "banana"]);

  const addItem = () => {
    setItem([...items, "orange"]);
  };
  return (
    <div>
      <h1>fruits</h1>
      <ul>
        {items.map((item ,idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}> add orange</button>
    </div>
  );
};
