import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div>
      <h1>Page not found!</h1>
      <Link to="/">Go to home</Link>
    </div>
  );
};

export default NotFound;
