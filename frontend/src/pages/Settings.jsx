import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { motion } from 'framer-motion';
import api from '../services/api';

export default function Settings() {
  const { user, setUser, logout } = useContext(AuthContext);
  const [username, setUsername] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  if (!user) return null;

  const handleUpdate = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const { data } = await api.put('/auth/profile', { username, email });
      setUser(data);
      setIsEditing(false);
      setMessage('Profile updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update profile');
    }
  };

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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Profile Information</h3>
          {!isEditing && (
            <button className="btn-outline" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }} onClick={() => setIsEditing(true)}>
              Edit Profile
            </button>
          )}
        </div>
        
        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-error">{error}</div>}

        <form onSubmit={handleUpdate} style={{ marginBottom: '2rem' }}>
          <div className="input-group">
            <label>Username</label>
            <div className="input-wrapper">
              <span className="input-icon">👤</span>
              <input 
                type="text" 
                value={username} 
                onChange={e => setUsername(e.target.value)}
                disabled={!isEditing} 
                style={{ opacity: isEditing ? 1 : 0.7 }} 
                required
              />
            </div>
          </div>
          
          <div className="input-group">
            <label>Email Address</label>
            <div className="input-wrapper">
              <span className="input-icon">✉️</span>
              <input 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                disabled={!isEditing} 
                style={{ opacity: isEditing ? 1 : 0.7 }} 
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Account Role</label>
            <div className="input-wrapper">
              <span className="input-icon">🛡️</span>
              <input type="text" value={user.role.toUpperCase()} disabled style={{ opacity: 0.7, color: 'var(--accent)' }} />
            </div>
          </div>

          {isEditing && (
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <button type="button" className="btn-outline" onClick={() => { setIsEditing(false); setUsername(user.username); setEmail(user.email); }}>Cancel</button>
              <button type="submit" className="btn">Save Changes</button>
            </div>
          )}
        </form>

        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Security Actions</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn-outline" style={{ flex: 1 }}>Update Password</button>
          <button className="btn btn-danger" style={{ flex: 1, color: 'white' }} onClick={logout}>Sign Out</button>
        </div>
      </motion.div>
    </div>
  );
}
