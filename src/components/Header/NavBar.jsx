import React from "react";
import { BsCamera } from "react-icons/bs";
import { Link } from "react-router-dom";
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>
        <div className="login">
          <button>
            <Link to="#">Login</Link>
          </button>
        </div>
      </header>
      <hr />
    </>
  );
}

export default NavBar;
