import React from "react";
import { ComponentD } from "./ComponentD";

export const ComponentC = (props) => {
  return (
    <div>
      <ComponentD userName={props.userName} />
    </div>
  );
};
