import React from "react";
import { Link, Outlet } from "react-router-dom";

interface HeaderProps {
  appName: string;
}

const Header: React.FC<HeaderProps> = ({ appName }) => {
  return (
    <div>
      <header className="header">
        <nav className="header__nav">
          <Link to="/" className="header__logo">
            {appName}
          </Link>
          <ul className="header__menu">
            <li>
              <Link to="tools">Tools</Link>
            </li>
            <li>
              <Link to="about">About Us</Link>
            </li>
            <li>
              <Link to="contact">Contact Us</Link>
            </li>
            <li>
              <Link to="login">Log In</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
