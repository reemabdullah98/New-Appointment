import axios from 'axios';

const base = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: base,
  headers: { 'Content-Type': 'application/json' },
});

// attach token if present
api.interceptors.request.use((cfg) => {
  const token = localStorage.getItem('token');
  if (token) cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});

export default api;
