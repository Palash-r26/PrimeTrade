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
          <Link to="#">About</Link>
          <Link to="#">Developers</Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {user ? (
            <>
              <span style={{color: 'var(--text-muted)', fontSize: '0.875rem'}}>
                {user.username} {user.role === 'admin' && '(Admin)'}
              </span>
              <button className="btn-outline" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link to="/login" className="btn-outline">Extension</Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
