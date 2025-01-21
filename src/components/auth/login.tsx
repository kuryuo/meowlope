import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAsync } from '../../store/authSlice';
import { RootState } from '../../store';
import { AppRoute } from '../../const';
import styles from './auth.module.css';

export default function Login() {
  const dispatch = useAppDispatch();  
  const { isAuthenticated, loading, error } = useAppSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginAsync(formData));  
  };

   
  if (isAuthenticated) {
    return <Navigate to={AppRoute.Profile} />;
  }

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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {loading && <p className={styles.loading}>Loading...</p>}
        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.submitButton} disabled={loading}>
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
