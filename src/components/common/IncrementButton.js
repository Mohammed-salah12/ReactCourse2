import React, { memo } from "react";

export const IncrementButton = memo(({ handleIncrimination }) => {
  console.log("button rendered");
  return <button onClick={handleIncrimination}> increment by 1</button>;
});
