import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  auth, 
  updateEmail, 
  sendEmailVerification, 
  reauthenticateWithCredential, 
  EmailAuthProvider, 
  updatePassword 
} from './firebaseConfig';
import './assets/Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setEmail(currentUser.email);
    }
  }, []);

  const handleEmailChange = async () => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      try {
        await sendEmailVerification(currentUser, newEmail);
        setEmail(newEmail);
        setMessage('Verification email sent. Please check your inbox.');
      } catch (error) {
        setMessage(`Error: ${error.message}`);
      }
    }
  };

  const handleVerifyEmail = async () => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      try {
        await updateEmail(currentUser, newEmail);
        setEmail(newEmail);
        setMessage('Email updated successfully');
      } catch (error) {
        setMessage(`Error: ${error.message}`);
      }
    }
  };

  const handlePasswordChange = async () => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      if (newPassword !== confirmNewPassword) {
        setMessage("New passwords don't match");
        return;
      }
      const credential = EmailAuthProvider.credential(currentUser.email, oldPassword);
      try {
        await reauthenticateWithCredential(currentUser, credential);
        await updatePassword(currentUser, newPassword);
        setMessage('Password updated successfully');
      } catch (error) {
        setMessage(`Error: ${error.message}`);
      }
    }
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/');
    }).catch((error) => {
      setMessage(`Error: ${error.message}`);
    });
  };

  return (
    <div className="profile">
      <div className="profile-container">
        <h2>Profile</h2>
        <p>Current Email: {email}</p>
        <input
          type="email"
          placeholder="New Email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <button onClick={handleEmailChange}>Send Verification Email</button>
        <button onClick={handleVerifyEmail}>Verify Email</button>
        <hr />
        <h3>Change Password</h3>
        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
        <button onClick={handlePasswordChange}>Update Password</button>
        <button onClick={handleLogout}>Logout</button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Profile;
