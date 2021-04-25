import React from 'react';
import style from './AppBar.module.scss';
import Container from '@material-ui/core/Container';
import Button from '../Button/Button.js';

const AppBar = () => (
  <div className={style.root}>
      <Button>O nas</Button>
      <Button>Galeria</Button>
      <Button>Nasze produkty</Button>
      <Button>Kontakt</Button>
  </div>
);

export default AppBar;