import React, { useState, useEffect, useContext } from 'react';
import api from '../services/api';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);

  // Form State
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');

  const fetchTasks = async () => {
    try {
      const { data } = await api.get('/tasks');
      setTasks(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch trades');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/tasks/${editingId}`, { title, description, status });
      } else {
        await api.post('/tasks', { title, description, status });
      }
      resetForm();
      fetchTasks();
    } catch (err) {
      setError(err.response?.data?.error || 'Operation failed');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      try {
        await api.delete(`/tasks/${id}`);
        fetchTasks();
      } catch (err) {
        setError('Failed to delete record');
      }
    }
  };

  const handleEdit = (task) => {
    setEditingId(task._id);
    setTitle(task.title);
    setDescription(task.description);
    setStatus(task.status);
    setShowForm(true);
  };

  const resetForm = () => {
    setEditingId(null);
    setTitle('');
    setDescription('');
    setStatus('pending');
    setShowForm(false);
  };

  if (loading) return <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>Loading your dashboard...</div>;

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>
            Trade <span className="text-accent">Dashboard</span>
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>Manage and track your active trading strategies.</p>
        </div>
        <button className="btn" onClick={() => { resetForm(); setShowForm(!showForm); }}>
          {showForm ? 'Cancel' : '+ New Trade'}
        </button>
      </div>

      {error && <div className="alert alert-error fade-up">{error}</div>}

      {showForm && (
        <div className="fade-up" style={{ 
          backgroundColor: 'var(--bg-card)', 
          border: '1px solid var(--border-color)', 
          borderRadius: 'var(--radius-lg)', 
          padding: '2rem',
          marginBottom: '3rem'
        }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: '600' }}>
            {editingId ? 'Edit Trade Details' : 'Record New Trade'}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="split-layout" style={{ minHeight: 'auto', gap: '1.5rem', alignItems: 'start' }}>
              <div style={{ flex: 1, width: '100%' }}>
                <div className="input-group">
                  <label>Trade Title / Asset</label>
                  <div className="input-wrapper">
                    <span className="input-icon">📈</span>
                    <input type="text" required placeholder="e.g., BTC/USD Long Position" value={title} onChange={e => setTitle(e.target.value)} />
                  </div>
                </div>
                
                <div className="input-group">
                  <label>Status</label>
                  <div className="input-wrapper">
                    <span className="input-icon">🚥</span>
                    <select value={status} onChange={e => setStatus(e.target.value)} style={{ paddingLeft: '2.5rem', appearance: 'none' }}>
                      <option value="pending">Pending (Limit Order)</option>
                      <option value="in-progress">In Progress (Active Trade)</option>
                      <option value="completed">Completed (Closed Trade)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div style={{ flex: 1, width: '100%' }}>
                <div className="input-group">
                  <label>Strategy Notes & Description</label>
                  <div className="input-wrapper">
                    <span className="input-icon" style={{ top: '1.5rem' }}>📝</span>
                    <textarea 
                      rows="4" 
                      placeholder="Enter entry/exit targets, stop loss, and rationale..." 
                      value={description} 
                      onChange={e => setDescription(e.target.value)}
                      style={{ width: '100%', padding: '0.875rem 1rem 0.875rem 2.5rem', backgroundColor: 'var(--bg-input)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', color: 'var(--text-main)', fontFamily: 'var(--font)', resize: 'vertical' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
              <button type="button" className="btn-outline" onClick={resetForm}>Cancel</button>
              <button type="submit" className="btn">Save Trade</button>
            </div>
          </form>
        </div>
      )}

      <div className="task-grid-dark">
        {tasks.length === 0 ? (
          <div className="fade-up" style={{ textAlign: 'center', padding: '4rem', backgroundColor: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px dashed var(--border-color)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📉</div>
            <h3 style={{ marginBottom: '0.5rem' }}>No active trades found</h3>
            <p style={{ color: 'var(--text-muted)' }}>Click the "+ New Trade" button above to start tracking your portfolio.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {tasks.map((task, index) => (
              <div key={task._id} className="task-card fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="task-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div className="task-title" style={{ fontWeight: '600', fontSize: '1.1rem' }}>{task.title}</div>
                  <span className={`badge badge-${task.status}`} style={{ fontSize: '0.7rem' }}>
                    {task.status.replace('-', ' ')}
                  </span>
                </div>
                
                <div className="task-desc" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1, whiteSpace: 'pre-wrap' }}>
                  {task.description || <span style={{ fontStyle: 'italic', opacity: 0.5 }}>No description provided.</span>}
                </div>
                
                {user.role === 'admin' && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent)', marginBottom: '1rem', padding: '0.5rem', backgroundColor: 'var(--accent-faded)', borderRadius: 'var(--radius-sm)' }}>
                    <strong>User:</strong> {task.user?.username} ({task.user?.email})
                  </div>
                )}

                <div className="task-actions" style={{ display: 'flex', gap: '0.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                  <button className="btn-outline" style={{ flex: 1, padding: '0.4rem', fontSize: '0.8rem' }} onClick={() => handleEdit(task)}>
                    Edit
                  </button>
                  <button className="btn-outline" style={{ flex: 1, padding: '0.4rem', fontSize: '0.8rem', color: 'var(--danger)', borderColor: 'var(--border-color)' }} onClick={() => handleDelete(task._id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
