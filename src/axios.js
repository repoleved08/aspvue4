import axios from 'axios';
import { useAuthStore } from './stores/pstore';
// Create an Axios instance with a base URL
const apiClient = axios.create({
 baseURL: 'http://localhost:5114', 
 withCredentials: true,
 headers: {
    'Content-Type': 'application/json'
 }
});

// Add a request interceptor
apiClient.interceptors.request.use(config => {
 // Get the token from the store
 const authStore = useAuthStore();
 const token = authStore.token;

 // If the token exists, add it to the request headers
 if (token) {
    config.headers.Authorization = `Bearer ${token}`;
 }

 return config;
}, error => {
 // Do something with request error
 return Promise.reject(error);
});

export default apiClient;
