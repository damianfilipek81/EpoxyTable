import React from 'react';
import styles from './AppBar.module.scss';
import Button from '../Button/Button.js';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { settings } from '../../settings';

const AppBar = ({ handlePageChange }) => {
  return window.innerWidth > 426 ? (
    <div className={styles.root}>
      <Container className={styles.wrapper}>
        <div className={styles.logoWrapper}><img src={settings.logo} alt=''></img></div>
        <div className={styles.buttonsWrapper}>
          <Button pageNumber={1} handlePageChange={handlePageChange}>O nas</Button>
          <Button pageNumber={2} handlePageChange={handlePageChange}>Galeria</Button>
          <Button pageNumber={3} handlePageChange={handlePageChange}>Nasze produkty</Button>
          <Button pageNumber={4} handlePageChange={handlePageChange}>Kontakt</Button>
        </div>
      </Container>
    </div>
  ) :
    <div className={styles.root}>
      <div className={styles.logoWrapper}><img src={settings.logo} alt=''></img></div>
    </div>
}

AppBar.propTypes = {
  handlePageChange: PropTypes.func,
}

export default AppBar;