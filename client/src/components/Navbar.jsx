import React from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">HealthTrack AI</span>
      </div>
      <div className="navbar-right">
        {user && <span className="navbar-user">Hi, {user.name}</span>}
        <button className="btn-outline" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
