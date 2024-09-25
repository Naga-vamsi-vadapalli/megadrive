// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000', // Update to your backend API URL
});

export default instance;
