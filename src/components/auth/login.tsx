import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../services/api';
import { setTokens } from '../../services/token';
import { AppRoute } from '../../const';
import styles from './auth.module.css';
import axios from 'axios';

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await login(formData.username, formData.password);

      if (response.status === 200) {
        const { refresh, access } = response.data;

        setTokens(access.token, refresh.token);

        console.log('Вы успешно вошли в систему:', response.data);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data?.detail || 'Ошибка при входе. Проверьте данные.');
        console.error('Ошибка входа:', error.response?.data);
      } else {
        setErrorMessage('Что-то пошло не так.');
        console.error('Непредвиденная ошибка:', error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}

        <button type="submit" className={styles.submitButton}>
          Log In
        </button>
      </form>
      <p className={styles.registerPrompt}>
        Don’t have an account?{' '}
        <Link to={AppRoute.Register} className={styles.registerLink}>
          Sign Up
        </Link>
      </p>
    </div>
  );
}
