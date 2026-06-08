import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Briefcase, Mail, GraduationCap, Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Developers() {
  return (
    <div className="dev-page-container container fade-up" style={{ padding: '4rem 1.5rem' }}>

      <div className="dev-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div 
          className="dev-hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h1 className="dev-title" style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
            Meet the <span className="text-accent">Developer</span>
          </h1>
          <p className="dev-subtitle" style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Passionate about crafting intelligent web solutions and leveraging AI technologies to solve real-world challenges with innovation.
          </p>
        </motion.div>

        <motion.div 
          className="dev-profile-card auth-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '3rem', maxWidth: '100%', padding: '2rem' }}
        >
          <div className="dev-profile-image" style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid var(--accent)' }}>
            <img src="/Profile - Phtoto.jpg" alt="Palash Rai" className="dev-photo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Palash+Rai&background=0dfc82&color=000'; }} />
          </div>
          <div className="dev-profile-info">
            <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Palash Rai</h2>
            <div className="dev-tags" style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <span className="dev-tag">{'<>'} Software Developer</span>
              <span className="dev-separator">|</span>
              <span className="dev-tag">🎓 Computer Science and Engineering</span>
            </div>
            <div className="dev-social-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://github.com/Palash-r26" target="_blank" rel="noreferrer" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Code size={16} /> GitHub <ExternalLink size={14} />
              </a>
              <a href="https://linkedin.com/in/palash-rai2612" target="_blank" rel="noreferrer" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Briefcase size={16} /> LinkedIn <ExternalLink size={14} />
              </a>
              <a href="mailto:palashr2612@gmail.com" className="btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} /> Email
              </a>
            </div>
          </div>
        </motion.div>

        <div className="dev-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <motion.div 
            className="dev-grid-card auth-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{ maxWidth: '100%', padding: '2rem', margin: 0 }}
          >
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>
              <GraduationCap size={20} />
              <h3 style={{ fontSize: '1.1rem' }}>EDUCATION</h3>
            </div>
            <div className="card-body">
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Madhav Institute of Technology & Science</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Gwalior, Madhya Pradesh</p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                <span className="text-muted">Degree</span>
                <span style={{ fontWeight: '500' }}>B.Tech</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                <span className="text-muted">Duration</span>
                <span style={{ fontWeight: '500' }}>2024 - 2028</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.9rem' }}>
                <span className="text-muted">Branch</span>
                <span style={{ color: 'var(--accent)' }}>Computer Science & Design</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: 'var(--bg-input)', borderRadius: 'var(--radius-sm)' }}>
                <span className="text-muted">CGPA</span>
                <span style={{ fontWeight: '700', color: 'var(--accent)' }}>8.88</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="dev-grid-card auth-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{ maxWidth: '100%', padding: '2rem', margin: 0 }}
          >
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>
              <Award size={20} />
              <h3 style={{ fontSize: '1.1rem' }}>ACHIEVEMENTS</h3>
            </div>
            <div className="card-body">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--accent)' }}>🌟</span>
                  <span>Architected the core Trade Management platform and dynamic user workflows from scratch.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--accent)' }}>🌟</span>
                  <span>Maintained outstanding academic performance with a consistent 8.88 CGPA in engineering.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--accent)' }}>🌟</span>
                  <span>Engineered the robust MongoDB backend for secure, scalable user profile and trade management.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--accent)' }}>🌟</span>
                  <span>Implemented responsive React UI with seamless dark mode support and modern glassmorphism.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--accent)' }}>🌟</span>
                  <span>Built fully-secured JWT session workflows and robust authentication endpoints.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="dev-portfolio-card auth-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ maxWidth: '100%', textAlign: 'center', padding: '3rem 2rem' }}
        >
          <div style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
            <ExternalLink size={32} />
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Explore My Portfolio</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem auto' }}>
            Beyond the highlighted projects, my portfolio showcases case studies, technical insights, core skills, tech stacks, and my professional journey.
          </p>
          <a href="https://palashrai.me/" target="_blank" rel="noreferrer" className="btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <ExternalLink size={18} /> Visit Portfolio
          </a>
        </motion.div>
      </div>
    </div>
  );
}
