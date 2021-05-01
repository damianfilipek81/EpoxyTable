import React from 'react';
import styles from './AppBar.module.scss';
import Button from '../Button/Button.js';
import { Container } from '@material-ui/core';

const AppBar = () => (
  <div className={styles.root}>
    <Container className={styles.wrapper}>
      <Button>O nas</Button>
      <Button>Galeria</Button>
      <Button>Nasze produkty</Button>
      <Button>Kontakt</Button>
    </Container>
  </div>
);

export default AppBar;