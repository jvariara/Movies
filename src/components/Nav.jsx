import React from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";

function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <h1 className="nav__logo">Movies</h1>
        <ul className="nav__link--list">
          <li className="nav__link">
            <Link className="link__hover-effect nav__item" to="/">
              Home
            </Link>
          </li>
          <li className="nav__link">
            <Link className="link__hover-effect nav__item" to="/search">
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
