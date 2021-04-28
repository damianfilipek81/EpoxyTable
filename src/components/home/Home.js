import React from 'react';
import styles from './Home.module.scss';
import PropTypes from 'prop-types';
import HomeMainContent from './HomeMainContent.js';

const Home = ({ homeImages }) => (
  <div className={styles.root}>
    <HomeMainContent homeImages={homeImages} />
  </div>
);

Home.propTypes = {
  homeImages: PropTypes.array,
}

export default Home;