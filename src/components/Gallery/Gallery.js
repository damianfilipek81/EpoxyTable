import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import { Container } from '@material-ui/core';
import GalleryBox from '../GalleryBox/GalleryBoxContainer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Gallery = ({ galleryImages }) => {
  const screenWidth = window.innerWidth;
  const pagesCount = Math.ceil(galleryImages.length / 6);

  const pages = [];

  for (let i = 0; i < pagesCount; i++) {
    pages.push(i);
  }

  const width = [400, 300, 350, 300, 350, 400];
  const height = [200, 300, 270, 300, 270, 200];

  return screenWidth > 426 ? (
    <div className={styles.root}>
      <Container className={styles.container}>
        <h2 className={styles.title}>Galeria</h2>
        <Carousel interval={9999999999999} emulateTouch autoPlay={false} infiniteLoop={false} showThumbs={false} className={styles.carousel} renderArrowNext={()=>false} renderArrowPrev={()=> false}>
          {pages.map(page => {
            const activeImages = galleryImages.slice(page * 6, (page + 1) * 6);
            return <div className={styles.wrapper} key={page}>
              {activeImages.map(data => {
                const index = activeImages.indexOf(data);
                return <GalleryBox key={index} width={width[index]} height={height[index]} image={data.image} />
              })}
            </div>
          })}
        </Carousel>
      </Container>
    </div>
  ) :
  (
  <div className={styles.root}>
      <Container className={styles.container}>
        <h2 className={styles.title}>Galeria</h2>
        <Carousel emulateTouch className={styles.carousel}>
          {galleryImages.map(data => (
            <img src={data.image} alt='' key={galleryImages.indexOf(data)}></img>
          ))}
        </Carousel>
      </Container>
    </div>
  )
}

Gallery.propTypes = {
  galleryImages: PropTypes.array,
}

export default Gallery;