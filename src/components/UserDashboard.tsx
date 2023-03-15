import React from "react";

const user = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@example.com",
  password: "password123",
  rentedTools: ["drill", "hammer", "saw"],
};

const UserDashboard: React.FC = () => {
  return (
    <div className="user-dashboard">
      <h2>Welcome, {user.firstName}!</h2>
      <p>Email: {user.email}</p>
      <h3>Tools rented:</h3>
      {user.rentedTools.length === 0 ? (
        <p>No tools rented</p>
      ) : (
        <ul>
          {user.rentedTools.map((tool, idx) => (
            <li key={idx}>{tool}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserDashboard;
