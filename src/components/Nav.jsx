import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcMenu } from "react-icons/fc";

const Nav = () => {
  const [triggerMenu, setTriggerMenu] = useState(false);
  const triggerMenuHandler = () => {
    setTriggerMenu(!triggerMenu);
  };
  const initialMenuHandler = () => {
    if (triggerMenu === true) setTriggerMenu(!triggerMenu);
  };
  const navigate = useNavigate();
  const renegadeClickHandler = (e) => {
    navigate("/");
    e.preventDefault();
  };
  return (
    <header className="head">
      <div className="container">
        <div className="loading"></div>
        <nav>
          <h1 onClick={renegadeClickHandler}>renegade</h1>
          <div className="desktop-menu">
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="cart">Cart</Link>
              </li>
              <li>
                <Link to="account">Account</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="burger" onClick={triggerMenuHandler}>
          <FcMenu />
        </div>
        <div
          className={
            triggerMenu ? "mobile-menu openMenu" : "mobile-menu closeMenu"
          }
        >
          <ul>
            <li>
              <Link to="" onClick={initialMenuHandler}>
                Home
              </Link>
            </li>
            <li>
              <Link to="cart" onClick={initialMenuHandler}>
                Cart
              </Link>
            </li>
            <li>
              <Link to="account" onClick={initialMenuHandler}>
                Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Nav;
