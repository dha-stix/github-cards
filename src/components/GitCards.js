import React from "react";

const GitCard = ({ user }) => {
  return (
    <div className="card">
      <img src={user.avatar_url} alt={user.name} />
      <h2 className="card-title">{user.name}</h2>
      <p className="card-company">{user.company}</p>
      <br />
      <p className="card-company">{user.location}</p>
    </div>
  );
};
export default GitCard;
