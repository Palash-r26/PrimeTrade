import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AuthPage = () => {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(location.pathname === '/login');
  
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formError, setFormError] = useState('');
  
  const { login, register, error, user, setError } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLogin(location.pathname === '/login');
    setError(null);
    setFormError('');
  }, [location.pathname, setError]);

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    
    if (isLogin) {
      const success = await login(email, password);
      if (success) navigate('/dashboard');
    } else {
      if (password !== confirmPassword) {
        setFormError('Passwords do not match');
        return;
      }
      const success = await register(username, email, password);
      if (success) navigate('/dashboard');
    }
  };

  return (
    <div className="container split-layout fade-up">
      {/* Left Content */}
      <div className="hero-content">
        <div className="hero-badge">✨ PrimeTrade Vault Engine</div>
        <h1 className="hero-title">
          PrimeTrade Profile <br /><span className="text-accent">Platform</span>
        </h1>
        <p className="hero-desc">
          Stop typing the same information. Build your dynamic profile vault and securely autofill applications across the web with our companion extension.
        </p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📁</div>
            <div className="feature-content">
              <h4>Dynamic Data Vault</h4>
              <p>Build custom sections and fields. Store exactly what you need.</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <div className="feature-content">
              <h4>Browser Integration</h4>
              <p>Instantly sync your vault to the PrimeTrade Chrome Extension.</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <div className="feature-content">
              <h4>Universal Autofill</h4>
              <p>Map your custom fields to any job application with one click.</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <div className="feature-content">
              <h4>Privacy First</h4>
              <p>Your data is securely stored and isolated. You control it.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content - Auth Card */}
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-icon" style={{ fontSize: '2rem' }}>❖</div>
          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">Sign in to access your PrimeTrade profile.</p>
        </div>

        <div className="auth-toggle">
          <button 
            type="button" 
            className={isLogin ? 'active' : ''} 
            onClick={() => { setIsLogin(true); navigate('/login'); }}
          >
            Sign In
          </button>
          <button 
            type="button" 
            className={!isLogin ? 'active' : ''} 
            onClick={() => { setIsLogin(false); navigate('/register'); }}
          >
            Create Account
          </button>
        </div>

        {(error || formError) && (
          <div className="alert alert-error">{error || formError}</div>
        )}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="input-group">
              <label>Username</label>
              <div className="input-wrapper">
                <span className="input-icon">👤</span>
                <input 
                  type="text" 
                  placeholder="johndoe"
                  required 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
          )}

          <div className="input-group">
            <label>Email Address</label>
            <div className="input-wrapper">
              <span className="input-icon">✉️</span>
              <input 
                type="email" 
                placeholder="you@example.com"
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group" style={{ marginBottom: isLogin ? '0.5rem' : '1.25rem' }}>
            <label>
              <span>Password</span>
              {!isLogin && <span style={{ textTransform: 'none', color: 'var(--text-muted)' }}>min. 6 characters</span>}
            </label>
            <div className="input-wrapper">
              <span className="input-icon">🔒</span>
              <input 
                type="password" 
                placeholder="••••••••"
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {!isLogin && (
            <div className="input-group">
              <label>Confirm Password</label>
              <div className="input-wrapper">
                <span className="input-icon">🔒</span>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  required 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
          )}

          {isLogin && (
            <Link to="#" className="forgot-link">Forgot Password?</Link>
          )}

          <button type="submit" className="btn" style={{ width: '100%', padding: '1rem', marginTop: !isLogin ? '1rem' : '0' }}>
            {isLogin ? 'Sign In →' : 'Create Account →'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
