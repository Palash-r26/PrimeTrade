import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { motion } from 'framer-motion';

export default function Settings() {
  const { user, logout } = useContext(AuthContext);

  if (!user) return null;

  return (
    <div className="container fade-up" style={{ padding: '4rem 1.5rem', maxWidth: '800px' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginBottom: '3rem' }}
      >
        <h1 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          Account <span className="text-accent">Settings</span>
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>Manage your profile preferences and security.</p>
      </motion.div>

      <motion.div 
        className="auth-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        style={{ maxWidth: '100%', padding: '3rem' }}
      >
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Profile Information</h3>
        
        <div style={{ marginBottom: '2rem' }}>
          <div className="input-group">
            <label>Username</label>
            <div className="input-wrapper">
              <span className="input-icon">👤</span>
              <input type="text" value={user.username} disabled style={{ opacity: 0.7 }} />
            </div>
          </div>
          
          <div className="input-group">
            <label>Email Address</label>
            <div className="input-wrapper">
              <span className="input-icon">✉️</span>
              <input type="email" value={user.email} disabled style={{ opacity: 0.7 }} />
            </div>
          </div>

          <div className="input-group">
            <label>Account Role</label>
            <div className="input-wrapper">
              <span className="input-icon">🛡️</span>
              <input type="text" value={user.role.toUpperCase()} disabled style={{ opacity: 0.7, color: 'var(--accent)' }} />
            </div>
          </div>
        </div>

        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Actions</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn" style={{ flex: 1 }}>Update Password</button>
          <button className="btn btn-danger" style={{ flex: 1, color: 'white' }} onClick={logout}>Sign Out</button>
        </div>
      </motion.div>
    </div>
  );
}
