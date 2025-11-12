import React from "react";

export const ObjectExample = () => {
  const [users, setUser] = React.useState([
    { id: 1, name: "mohammad", age: 23 },
  ]);
  const addUser = () => {
    setUser([...users, { id: Date.now(), name: "yousef", age: 22 }]);
  };

  return (
    <div>
      <h1>users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} , {user.age} , {user.id}
          </li>
        ))}
      </ul>
      <button onClick={addUser}>add user</button>
    </div>
  );
};
