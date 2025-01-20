import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://localhost:8765/api/v1/', 
});

export const login = (username: string, password: string) => {
  return apiInstance.post('auth/login', { username, password });
};

export const register = (username: string, email: string, password: string) => {
  return apiInstance.post('auth/register', { username, email, password });
};
