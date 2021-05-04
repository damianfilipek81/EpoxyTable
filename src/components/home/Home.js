import React from 'react';
import styles from './Home.module.scss';
import PropTypes from 'prop-types';
import HomeMainContent from './HomeMainContent.js';

const Home = ({ homeImages, handlePageChange }) => (
  <div className={styles.root}>
    <HomeMainContent homeImages={homeImages} handlePageChange={handlePageChange}/>
  </div>
);

Home.propTypes = {
  homeImages: PropTypes.array,
  handlePageChange: PropTypes.func,
}

export default Home;