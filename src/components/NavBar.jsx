import React from "react";
import { Link } from "react-router-dom";
import "./Game.css";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/" className="link">
        {" "}
        PlayArena
      </Link>
      <Link to="/login" className="link">
        Login
      </Link>
      <Link to="/about" className="link">
        About{" "}
      </Link>
    </div>
  );
}

export default NavBar;
