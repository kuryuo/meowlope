import axios from 'axios';
import { getRefreshToken, setTokens, removeTokens } from './token';
import { AppRoute } from '../const';

const apiInstance = axios.create({
  baseURL: 'http://localhost:8765/api/v1/',
});

  
const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken();

  if (!refreshToken) {
    throw new Error('Refresh token отсутствует');
  }

    
  const response = await apiInstance.post('auth/obtaintokenpair', {
    refresh: refreshToken,
  });

  const { access, refresh } = response.data;
  setTokens(access.token, refresh.token);   
  return access.token;
};

  
apiInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

  
apiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshAccessToken();
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return apiInstance(originalRequest);   
      } catch (refreshError) {
        console.error('Ошибка обновления токена:', refreshError);
        removeTokens();   
        window.location.href = AppRoute.Login;   
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);   
  }
);

export default apiInstance;

export const login = (username: string, password: string) => {
  return apiInstance.post('auth/login', { username, password });
};

export const register = (username: string, email: string, password: string) => {
  return apiInstance.post('auth/register', { username, email, password });
};
