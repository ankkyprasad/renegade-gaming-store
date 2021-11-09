import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const renegadeClickHandler = (e) => {
    e.preventDefault();
  };
  return (
    <header className="head">
      <div className="container">
        <nav>
          <h1 onClick={renegadeClickHandler}>renegade</h1>
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="games">Games</Link>
            </li>
            <li>
              <Link to="account">Account</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
