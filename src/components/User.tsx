import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const User: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div>
      <nav></nav>
      <Outlet />
    </div>
  );
};

export default User;
