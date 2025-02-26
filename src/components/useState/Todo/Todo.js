import React, { useState } from "react";

export const Todo = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState(["task1"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, input]);
    console.log("tasks", tasks);
  };

  return (
    <div className="TodoContainerDiv">
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setInput(e.target.value)} />
          <button>submit task</button>
        </form>
        {tasks.map((task, idx) => {
          return <div key={idx}>{task}</div>; // you can use any unique key here, here we're using taskId as a key
        })}
      </div>
    </div>
  );
};
