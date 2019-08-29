import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = props => {
    return (
      <div className="navbar">
        <div className="nav-content">
          <div className="nav-logo">replate</div>
  
          <div className="nav-links">
            <NavLink
              exact
              to="/"
              className="nav-link"
              activeClassName="nav-link-active"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="nav-link"
              activeClassName="nav-link-active"
            >
              About
            </NavLink>
            <NavLink
              to="/signup"
              className="nav-link"
              activeClassName="nav-link-active"
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/login"
              className="nav-link"
              activeClassName="nav-link-active"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  