import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './auth.module.css';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
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
    console.log('Login data submitted:', formData);
  };

  return (
    <div className={styles.container}>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
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

        <button type="submit" className={styles.submitButton}>
          Log In
        </button>
      </form>
      <p className={styles.registerPrompt}>
        Don’t have an account?{' '}
        <Link to="/" className={styles.registerLink}>
          Sign Up
        </Link>
      </p>
    </div>
  );
}
