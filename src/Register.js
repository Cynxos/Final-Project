import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import './assets/Login.css'; // Assuming Login.css contains your styles

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, { displayName })
          .then(() => {
            console.log('User profile updated');
            navigate('/dashboard');
          })
          .catch((profileError) => {
            console.error('Error updating profile:', profileError);
            setError(profileError.message);
          });
      })
      .catch((error) => {
        console.error('Error creating new user:', error);
        setError(error.message);
      });
  };

  const navigateToLogin = () => {
    navigate('/');
  };

  return (
    <div className="screen">
      <div className="card">
        <h1 className="text-title">Register</h1>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
            className="input"
          />
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
          <button type="submit" className="button">Register</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button onClick={navigateToLogin} className="button">Go to Login</button>
      </div>
    </div>
  );
};

export default Register;
