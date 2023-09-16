import axios from 'axios';

// Create a custom Axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3002', // Backend's base URL
  // Add other custom configuration options here
  // For sending and recieving cookies for requests
  withCredentials: true,
});

export default axiosInstance;