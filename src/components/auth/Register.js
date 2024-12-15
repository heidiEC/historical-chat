import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './Auth.css';

function Register({ onToggleForm }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
const authResponse = await fetch('/api/auth', { method: 'POST', body: JSON.stringify({ email, password }) });
      if (authResponse.ok) {
        // registration successful
        const token = await authResponse.json();
        dispatch(setToken(token));
      } else if (authResponse.status === 302) {
        // Handle the redirect response here
        console.log('Redirecting to another URL');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-form">
      <h2>Register</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="auth-button">Register</button>
      </form>
      <p className="auth-toggle">
        Already have an account?{' '}
        <button onClick={onToggleForm} className="toggle-button">
          Login
        </button>
      </p>
    </div>
  );
}

export default Register;
