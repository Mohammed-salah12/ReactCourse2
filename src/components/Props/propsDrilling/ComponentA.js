import React, { useState } from "react";
import { ComponentB } from "./ComponentB";

export const ComponentA = () => {
  const [name, setName] = useState("moh");
  return (
    <div>
      <ComponentB userName={name} />
    </div>
  );
};
