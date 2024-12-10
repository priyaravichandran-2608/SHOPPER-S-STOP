import React, { useState } from 'react';
import axios from 'axios';
import './CSS/LoginSignup.css';
import { loginUser } from '../server';
import { Link } from 'react-router-dom';

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await loginUser(formData);
      console.log('User logged in successfully:', response);
      // Handle successful login (e.g., store user data, redirect to dashboard)
    } catch (error) {
      console.error('Error logging in:', error.message);
      // Handle login error (e.g., display error message to user)
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fields">
          <input type="email" name="email" placeholder='Email Address' value={formData.email} onChange={handleInputChange} />
          <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleInputChange} />
        </div>
        <button onClick={handleLogin}>Login</button>
        <p className='loginsignup-login'>Don't have an account?<span><Link to="/register">Sign up here</Link></span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
