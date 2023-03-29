import React from "react";
import {
  Navigate,
  NavLink,
  Outlet,
  redirect,
  useLoaderData,
} from "react-router-dom";
import { requireAuth } from "../../methods/requireAuth";

export const loader = () => {
  requireAuth();
  const isLoggedIn = localStorage.getItem("loggedin");
  return isLoggedIn;
};

const User: React.FC = () => {
  const loaderData = useLoaderData();

  const loaderDatahandler = (data: unknown) => {
    if (typeof data === "string") {
      return data;
    } else if (typeof data === "number" || typeof data === "boolean") {
      return String(data);
    } else {
      console.log(data);
      return "data logged to console";
    }
  };

  const logout = () => {
    localStorage.removeItem("loggedin");
    console.log("logged out!");
  };

  return (
    <div className="user">
      <nav className="user__nav">
        <div className="user__nav--links">
          <NavLink to="." end>
            Profile
          </NavLink>
          <NavLink to="rented_tools">Rented Tools</NavLink>
          <NavLink to="history">History</NavLink>
          <NavLink to="payment">Payment</NavLink>
        </div>
        <button className="user__nav--btn" onClick={logout}>
          Log out
        </button>
      </nav>
      <h2>{loaderDatahandler(loaderData)}</h2>
      <Outlet />
    </div>
  );
};

export default User;
