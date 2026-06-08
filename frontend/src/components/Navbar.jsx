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
    <div className="navbar-wrapper">
      <nav className="navbar fade-up">
        <Link to="/" className="brand">
          <span className="brand-icon">❖</span> PrimeTrade
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/developers">Developers</Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {user ? (
            <>
              <Link to="/settings" style={{color: 'var(--text-muted)', fontSize: '0.875rem'}}>
                {user.username} {user.role === 'admin' && '(Admin)'}
              </Link>
              <Link to="/dashboard" className="btn-outline" style={{ marginRight: '0.5rem' }}>Dashboard</Link>
              <button className="btn-outline" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link to="/login" className="btn-outline">Login</Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
