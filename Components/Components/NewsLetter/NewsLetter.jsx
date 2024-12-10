import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a POST request to store the email in the database
      await axios.post('http://localhost:8080/users', { email });
      // Reset the email input after successful submission
      setEmail('');
      alert('Thank you for subscribing!');
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('Failed to subscribe. Please try again later.');
    }
  };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Your Email id'
          value={email}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      <Link to="/subscribers">
        <button>View Subscribers</button>
      </Link>
    </div>
  );
};

export default NewsLetter;
