import React from "react";
import { BsCamera } from "react-icons/bs";

import "./nav-bar.css";

function NavBar() {
  return (
    <>
      <header className="nav-bar">
        <div className="logo">
          <BsCamera className="camera" />
          <h1>slacrane shot it</h1>
        </div>
        <nav className="navbar-navlinks">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Book a session</a>
            </li>
          </ul>
        </nav>
        <div className="login">
          <button>
            <a href="#">Login</a>
          </button>
        </div>
      </header>
      <hr />
    </>
  );
}

export default NavBar;
