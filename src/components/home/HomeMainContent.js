import React from 'react';
import PropTypes from 'prop-types';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from './HomeMainContent.module.scss';
import AppBar from '../appBar/AppBar';

const HomeMainContent = ({ homeImages }) => (
  <div className={styles.root}>
    <AppBar />
    <div className={styles.carouselWrapper}>
    <Carousel autoPlay infiniteLoop emulateTouch interval={6000}>
      {homeImages.map(data => (
        <div key={data.image}>
          <img src={data.image} alt='' />
        </div>
      ))}
    </Carousel>
    </div>
  </div>
)

HomeMainContent.propTypes = {
  homeImages: PropTypes.array,
}

export default HomeMainContent;