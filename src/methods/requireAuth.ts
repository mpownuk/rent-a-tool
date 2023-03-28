import { redirect } from "react-router-dom";

export const requireAuth = async () => {
  const loggedIn = localStorage.getItem("loggedin");
  if (!loggedIn) {
    throw redirect("/login");
  }
  return null;
};
