import React from 'react';
import styles from './AppBar.module.scss';
import Button from '../Button/Button.js';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';

const AppBar = ({ handlePageChange }) => {
  return window.innerWidth > 426 ? (
    <div className={styles.root}>
      <Container className={styles.wrapper}>
        <Button pageNumber={1} handlePageChange={handlePageChange}>O nas</Button>
        <Button pageNumber={2} handlePageChange={handlePageChange}>Galeria</Button>
        <Button pageNumber={3} handlePageChange={handlePageChange}>Nasze produkty</Button>
        <Button pageNumber={4} handlePageChange={handlePageChange}>Kontakt</Button>
      </Container>
    </div>
  ) :
    <div className={styles.root}>
      <div>Logo</div>
    </div>
}

AppBar.propTypes = {
  handlePageChange: PropTypes.func,
}

export default AppBar;