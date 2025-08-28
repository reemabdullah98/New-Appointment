import api from './api';

export async function register({ name, email, password }) {
  const { data } = await api.post('/auth/register', { name, email, password });
  // persist token
  localStorage.setItem('token', data.token);
  return data; // { token, user }
}

export async function login({ email, password }) {
  const { data } = await api.post('/auth/login', { email, password });
  localStorage.setItem('token', data.token);
  return data;
}

export async function getMe() {
  const { data } = await api.get('/auth/me');
  return data; // { id, name, email, created_at }
}

export function logout() {
  localStorage.removeItem('token');
}
