import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubscriberList = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users');
      setSubscribers(response.data);
    } catch (error) {
      console.error('Error fetching subscribers:', error);
    }
  };

  const handleDelete = async (email) => {
    try {
      await axios.get(`http://localhost:8080/users/del/${email}`);
      setSubscribers(subscribers.filter(subscriber => subscriber.email !== email));
      console.log('Subscriber deleted successfully:', email);
    } catch (error) {
      console.error('Error deleting subscriber:', error);
    }
  };

  return (
    <div>
      <h2>Subscribers</h2>
      <ul>
        {subscribers.map((subscriber, index) => (
          <li key={index}>
            {subscriber.email}
            <button onClick={() => handleDelete(subscriber.email)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriberList;
  