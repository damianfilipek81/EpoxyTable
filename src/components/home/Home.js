import React from 'react';
import PropTypes from 'prop-types';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from './Home.module.scss';
import AppBar from '../appBar/AppBar';

const Home = ({ homeImages, handlePageChange }) => (
  <div className={styles.root}>
    <AppBar handlePageChange={handlePageChange} />
    <div className={styles.carouselWrapper}>
      <Carousel autoPlay infiniteLoop emulateTouch interval={6000} dynamicHeight={true}>
        {homeImages.map(data => (
          <div key={homeImages.indexOf(data)}>
            <img src={data.image} alt='' />
          </div>
        ))}
      </Carousel>
    </div>
  </div>
);

Home.propTypes = {
  homeImages: PropTypes.array,
  handlePageChange: PropTypes.func,
}

export default Home;