import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ToolProps } from "../interfaces/ToolProps";

interface HeaderProps {
  appName: string;
}

const Header: React.FC<HeaderProps> = ({ appName }) => {
  const [toolsInCart, setToolsInCart] = useState<ToolProps[] | null>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(window.innerWidth > 720);
  };

  useEffect(() => {
    window.addEventListener("resize", toggleMenu);

    return () => {
      window.removeEventListener("resize", toggleMenu);
    };
  }, []);

  return (
    <div>
      <div className="header--background">
        <header className="header">
          <nav className="header__nav">
            <Link to="/" className="header__logo">
              {appName}
            </Link>
            {showMenu && (
              <ul className="header__menu">
                <li>
                  <Link to="user">Account</Link>
                </li>
                <li>
                  <Link to="tools">Tools</Link>
                </li>
                <li>
                  <Link to="about">About</Link>
                </li>
                <li>
                  <Link to="contact">Contact</Link>
                </li>
                <li>
                  <Link to="login">Log In</Link>
                </li>
                <li>
                  <Link to="cart">
                    <div className="header__cart">
                      {toolsInCart && (
                        <div className="header__cart--orders">
                          {toolsInCart.length}
                        </div>
                      )}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="#ffd800"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
            <div
              className="header__hamburger"
              onClick={() => {
                setShowMenu((prev) => !prev);
              }}
            >
              <div className="header__hamburger--belt"></div>
              <div className="header__hamburger--belt"></div>
              <div className="header__hamburger--belt"></div>
            </div>
          </nav>
        </header>
      </div>
      <Outlet context={[toolsInCart, setToolsInCart]} />
    </div>
  );
};

export default Header;
