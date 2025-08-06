import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => (
  <div
    style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      color: '#fff',
      fontFamily: "'Poppins', sans-serif",
      padding: '2rem',
      textAlign: 'center',
    }}
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
      alt="Logo"
      style={{ width: '80px', marginBottom: '20px' }}
    />

    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
      🚀 Welcome to <span style={{ color: '#ffd700' }}>Admin Dashboard</span>
    </h1>

    <p style={{ maxWidth: '500px', fontSize: '1.1rem', lineHeight: '1.6' }}>
      A sleek and modern dashboard to monitor, manage, and master your workflows with style.
    </p>

    <img
      src="https://undraw.co/api/illustrations/97d05714-7dd1-41b3-a4c1-67d54c43a6ee"
      alt="Dashboard Illustration"
      style={{
        marginTop: '2rem',
        width: '100%',
        maxWidth: '400px',
        borderRadius: '12px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
      }}
    />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
