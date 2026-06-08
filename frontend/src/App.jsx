import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <div style={{ textAlign: 'center', padding: '4rem' }}>Loading...</div>;
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/" element={<AuthPage />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <div className="container fade-up">
              <Dashboard />
            </div>
          </PrivateRoute>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
