import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '#', 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
      if (error.response) {
      console.error('Response error:', error.response.data);
    } else if (error.request) {
      console.error('Request error:', error.request);
    } else {
      console.error('Request configuration error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
