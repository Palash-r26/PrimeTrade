import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ 
      borderTop: '1px solid var(--border-color)', 
      backgroundColor: 'var(--bg-main)',
      padding: '4rem 1.5rem 2rem',
      marginTop: 'auto'
    }}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '3rem',
        marginBottom: '3rem'
      }}>
        {/* Brand Column */}
        <div style={{ maxWidth: '300px' }}>
          <Link to="/" className="brand" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
            <span className="brand-icon">❖</span> PrimeTrade
          </Link>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Next-generation Web3 trading intelligence. Manage your portfolio, execute strategies, and stay ahead of the market.
          </p>
        </div>

        {/* Links Columns */}
        <div>
          <h4 style={{ color: 'var(--text-main)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>Company</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link to="/about" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>About Us</Link></li>
            <li><Link to="/developers" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Developers</Link></li>
            <li><Link to="/settings" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Account</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: 'var(--text-main)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>Connect</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><a href="https://github.com/Palash-r26" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>GitHub</a></li>
            <li><a href="https://linkedin.com/in/palash-rai2612" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>LinkedIn</a></li>
            <li><a href="mailto:palashr2612@gmail.com" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Contact Support</a></li>
          </ul>
        </div>
      </div>

      <div className="container" style={{ 
        borderTop: '1px solid var(--border-color)', 
        paddingTop: '2rem', 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
          &copy; {new Date().getFullYear()} PrimeTrade Platform. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
