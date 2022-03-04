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
      <Link to="/contactus" className="link">
        ContactUs{" "}
      </Link>
    </div>
  );
}

export default NavBar;
