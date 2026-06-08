import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="container fade-up" style={{ padding: '4rem 1.5rem', maxWidth: '800px' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <h1 className="hero-title" style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
          About <span className="text-accent">PrimeTrade</span>
        </h1>
        <p className="hero-desc" style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: '0 auto' }}>
          Redefining trading intelligence in the Web3 space.
        </p>
      </motion.div>

      <motion.div 
        className="auth-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        style={{ maxWidth: '100%', padding: '3rem' }}
      >
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent)' }}>Our Mission</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
          While others are analyzing historical data, we are shaping the future of crypto trading. 
          PrimeTrade is a next-generation platform built to empower traders with intelligent, real-time tools to manage portfolios, execute strategies, and stay ahead of the market.
        </p>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent)' }}>The Platform</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
          Our Web3 Engine provides a secure, role-based environment for users to log active trades, limit orders, and comprehensive strategy notes. 
          Powered by a robust Node.js backend and a scalable MongoDB database, PrimeTrade guarantees lightning-fast execution and uncompromised privacy.
        </p>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent)' }}>Why We Built It</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          Trading in the modern crypto landscape requires absolute precision and extreme organization. We realized the need for a unified dashboard that strips away the noise and focuses purely on what matters: the trade. 
        </p>
      </motion.div>
    </div>
  );
}
