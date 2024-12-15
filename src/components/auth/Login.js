import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './Auth.css';

function Login({ onToggleForm }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authResponse = await fetch('/api/auth', { method: 'POST', body: JSON.stringify({ email, password }) });
      if (authResponse.ok) {
        // authentication successful
        const token = await authResponse.json();
        dispatch(setToken(token));
      } else if (authResponse.status === 302) {
        // Handle the redirect response here
        console.log('Redirecting to another URL');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
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
        <button type="submit" className="auth-button">Login</button>
      </form>
      <p className="auth-toggle">
        Don't have an account?{' '}
        <button onClick={onToggleForm} className="toggle-button">
          Register
        </button>
      </p>
    </div>
  );
}

export default Login;
