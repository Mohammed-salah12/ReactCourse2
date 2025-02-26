import React, { useState } from "react";

export const UseStateWithObjects = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    pass: "",
    phoneNumber: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("userData", userData);
  };
  return (
    <div className="UseStateWithObjectsContainerDiv">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="username"
          value={userData.username}
        />
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={userData.email}
        />
        <input
          onChange={handleChange}
          type="password"
          name="pass"
          value={userData.pass}
        />
        <input
          onChange={handleChange}
          type="number"
          name="phoneNumber"
          value={userData.phoneNumber}
        />
        <button>submit form</button>
      </form>

      <p>username {userData.username}</p>
      <p>email {userData.email}</p>
      <p>number {userData.phoneNumber}</p>
    </div>
  );
};
