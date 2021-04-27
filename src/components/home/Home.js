import React from 'react';
import AppBar from '../appBar/AppBar';
import Logo from '../Logo/Logo';
import styles from './Home.module.scss';

const Home = () => (
  <div className={styles.root}>
    <div className={`${styles.logoWrapper} ${styles.wrapper}`}>
      <Logo />
    </div>
    <div className={styles.wrapper}>
      <AppBar />
    </div>
  </div>
);

export default Home;