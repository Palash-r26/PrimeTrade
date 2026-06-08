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
      setError('Failed to fetch tasks');
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
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await api.delete(`/tasks/${id}`);
        fetchTasks();
      } catch (err) {
        setError('Failed to delete task');
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

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Dashboard</h2>
        <button className="btn" onClick={() => { resetForm(); setShowForm(!showForm); }}>
          {showForm ? 'Cancel' : 'Create Task'}
        </button>
      </div>

      {error && <div className="alert alert-error">{error}</div>}

      {showForm && (
        <div className="card fade-in" style={{ marginBottom: '2rem' }}>
          <h3>{editingId ? 'Edit Task' : 'New Task'}</h3>
          <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
            <div className="input-group">
              <label>Title</label>
              <input type="text" required value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="input-group">
              <label>Description</label>
              <textarea rows="3" value={description} onChange={e => setDescription(e.target.value)} />
            </div>
            <div className="input-group">
              <label>Status</label>
              <select value={status} onChange={e => setStatus(e.target.value)}>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <button type="submit" className="btn">Save Task</button>
          </form>
        </div>
      )}

      <div className="task-grid">
        {tasks.length === 0 ? (
          <p style={{ color: 'var(--text-secondary)' }}>No tasks found.</p>
        ) : (
          tasks.map(task => (
            <div key={task._id} className="card task-card fade-in">
              <div className="task-header">
                <div className="task-title">{task.title}</div>
                <span className={`badge badge-${task.status}`}>
                  {task.status.replace('-', ' ')}
                </span>
              </div>
              <div className="task-desc">{task.description}</div>
              
              {user.role === 'admin' && (
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  User: {task.user?.username} ({task.user?.email})
                </div>
              )}

              <div className="task-actions">
                <button className="btn btn-outline" style={{ flex: 1, padding: '0.5rem' }} onClick={() => handleEdit(task)}>
                  Edit
                </button>
                <button className="btn btn-danger" style={{ flex: 1, padding: '0.5rem' }} onClick={() => handleDelete(task._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
