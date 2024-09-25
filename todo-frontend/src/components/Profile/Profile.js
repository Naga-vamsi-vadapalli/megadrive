// src/components/Profile/Profile.js
import React, { useEffect, useState } from 'react';
import axios from '../axios';

function Profile() {
  const [profileData, setProfileData] = useState({ name: '', email: '' });

  const fetchProfile = async () => {
    try {
      const res = await axios.get('/api/profile', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setProfileData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put('/api/profile', profileData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  };

  useEffect(() => {
    fetchProfile(); // Call to fetch profile data
  }, []);

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <h2>Profile</h2>
      <input type="text" name="name" value={profileData.name} onChange={handleChange} required />
      <input type="email" name="email" value={profileData.email} onChange={handleChange} required />
      <button type="submit">Update Profile</button>
    </form>
  );
}

export default Profile;
