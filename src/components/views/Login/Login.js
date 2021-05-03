import React from 'react';
import styles from './Login.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Login = () => (
  <div className={styles.root}>
    <div className='container'>
      <h2 className={styles.title}> autoryzacja i uprawnienia NOWOŚĆ </h2>
      <div className={styles.window}>
        <h1 className={styles.header}>
          {' '}
          <FontAwesomeIcon className={styles.icon} icon={faClock} /> nakiedy{' '}
        </h1>
        <p> .com </p>
        <h3 className={styles.loginTitle}> Logowanie dla pracowników </h3>
        <form className={styles.formWrapper}>
          <label htmlFor='email'> Email </label>
          <input type='email' id='email' minLength='6' required />
          <label htmlFor='password'> Hasło </label>
          <input type='password' id='password' minLength='8' required />
          <p>
            {' '}
            Nie pamiętasz hasła?
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
  </div>
);

export default Login;
