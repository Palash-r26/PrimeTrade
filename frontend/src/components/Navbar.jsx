import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar container">
      <Link to="/" className="navbar-brand">PrimeTrade</Link>
      <div className="navbar-menu">
        {user ? (
          <>
            <span style={{color: 'var(--text-secondary)'}}>
              Welcome, {user.username} {user.role === 'admin' && '(Admin)'}
            </span>
            <button className="btn btn-outline" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline">Login</Link>
            <Link to="/register" className="btn">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
