// src/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './assets/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogleLogin = () => {
    auth.signInWithPopup(provider).then((result) => {
      console.log('User authenticated:', result.user);
      navigate('/dashboard');
    }).catch((error) => {
      console.error('Error during authentication:', error);
      setError(error.message);
    });
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      console.log('User authenticated:', result.user);
      navigate('/dashboard');
    }).catch((error) => {
      console.error('Error during authentication:', error);
      setError(error.message);
    });
  };

  const navigateToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="screen">
      <div className="card">
        <h1 className="text-title">Welcome to FitQuest</h1>
        <p className="text-subtitle">Please enter your login details</p>
        <form onSubmit={handleEmailLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input"
          />
          <button type="submit" className="button">Login with Email</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button onClick={handleGoogleLogin} className="button">Login with Google</button>
        <button onClick={navigateToRegister} className="button">Register</button>
        {/* <p className="forgot-password">Forgot Password?</p> */}
      </div>
    </div>
  );
};

export default Login;
