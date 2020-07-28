import React, { useState } from "react";
import GitCard from "./GitCards";

const GitDisplay = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    const url = `https://api.github.com/users/${username}`;
    try {
      fetch(url)
        .then(res => res.json())
        .then(data => setUser(data));
      setUsername("");
    } catch (error) {
      console.log("Unable to validate details");
      console.error(error);
    }
  };

  return (
    <>
      <div className="home">
        <h1 className="title">GitHub Cards</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            required="required"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <button>VALIDATE</button>
        </form>
      </div>
      <GitCard user={user} />
    </>
  );
};

export default GitDisplay;
