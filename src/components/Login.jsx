
import React, { useState } from "react";

export const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = e => {
    e.preventDefault();
    if (username === "deepak" && password === "makkar") {
      setLoggedIn(true);
      // window.alert('Nice one!')
    } else {
      window.alert("Use deepak as username and password as makkar");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen flex justify-center w-full">
      <form onSubmit={handleLogin} className="bg-gray-800 p-6  rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full mb-4 p-2 border rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded-md"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
