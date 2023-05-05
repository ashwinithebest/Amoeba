import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const activeStyling = ({ isActive }) => {
        return {
          textDecoration: isActive ? 'none' : 'underline',
          fontWeight: isActive ? 'bold' : 'normal',
        };
      };
   
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <NavLink exact className="nav-link" activeClassName="active" style={activeStyling}  to="/">Home</NavLink>
              {/* The activeClassName prop is used to set the class name for the active link. */}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" style={activeStyling} to="/taskpage">Task</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
