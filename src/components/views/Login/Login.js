import React from 'react';
import styles from './Login.module.scss';
import Button from '../../common/Button/Button';

const Login = () => (
  <div className={styles.root}>
    <div className='container'>
      <h2 className={styles.title}> autoryzacja i uprawnienia NOWOŚĆ </h2>

      <form className={styles.formWrapper}>
        <label htmlFor='email'> Email </label>
        <input type='email' id='email' minLength='6' required />
        <label htmlFor='password'> Password </label>
        <input type='password' id='password' minLength='8' required />
        <p>
          {' '}
          Nie pamiętasz hasła?{' '}
          <a href='#' onClick={event => event.preventDefault()}>
            {' Przypomnij hasło. '}{' '}
          </a>
        </p>
        <Button className={styles.button} onClick={event => event.preventDefault()}>
          Zaloguj się
        </Button>
      </form>
    </div>
  </div>
);

export default Login;
