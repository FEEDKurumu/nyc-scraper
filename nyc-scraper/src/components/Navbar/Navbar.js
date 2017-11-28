import React from "react";
import { Link } from "react-router-dom"
import "./Navbar.css";

const Navbar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          nyt
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/home"
              ? "active"
              : ""
          }
        >
          <Link to="/home">Home</Link>
        </li>
        <li
          className={window.location.pathname === "/saved" ? "active" : ""}
        >
          <Link to="/saved">Saved</Link>
        </li>
      </ul>
    </div>
  </nav>;

export default Navbar;