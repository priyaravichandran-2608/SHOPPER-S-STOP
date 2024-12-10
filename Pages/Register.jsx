import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { addUser } from '../server';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    try {
      const response = await addUser(formData);
      console.log("Registration Succesfull", formData);
    } catch (error) {
      console.error('Error registering:', error.message);
      // Handle registration error (e.g., display error message to user)
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Register</h1>
        <div className="loginsignup-fields">
          <input type="text" name="name" placeholder='Your Name' value={formData.name} onChange={handleInputChange} />
          <input type="email" name="email" placeholder='Email Address' value={formData.email} onChange={handleInputChange} />
          <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleInputChange} />
        </div>
        <button onClick={handleRegister}><Link to='/'>Register</Link></button>
        <p className='loginsignup-login'>Already have an account?<span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
