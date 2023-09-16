import axios from 'axios';

// Create a custom Axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3002', // Replace with your backend's base URL
  // You can add other custom configuration options here
});

export default axiosInstance;