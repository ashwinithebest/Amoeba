import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../Utils/auth';

const Navbar = () => {
    const activeStyling = ({ isActive }) => {
        return {
          textDecoration: isActive ? 'none' : 'underline',
          fontWeight: isActive ? 'bold' : 'normal',
        };
      };
   
      const auth = useAuth()

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <NavLink exact='true' className="nav-link" activeclassname="active" style={activeStyling}  to="/">Home</NavLink>
              {/* The activeClassName prop is used to set the className name for the active link. */}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeclassname="active" style={activeStyling} to="/taskpage">Task</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeclassname="active" style={activeStyling} to="/profile">Profile</NavLink>
            </li>
            {
              !auth.user && (
                <li className="nav-item">
                <NavLink className="nav-link" activeclassname="active" style={activeStyling} to="/login">Login</NavLink>
              </li>
              )
            }
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
