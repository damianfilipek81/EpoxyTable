import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import { Container } from '@material-ui/core';
import GalleryBox from '../GalleryBox/GalleryBox';

const Gallery = ({ galleryImages }) => (
  <div className={styles.root}>
    <Container className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Galeria</h2>
        <GalleryBox width={400} height={200} image={galleryImages[0].image} />
        <GalleryBox width={300} height={300} image={galleryImages[1].image} />
        <GalleryBox width={350} height={270} image={galleryImages[2].image} />
        <GalleryBox width={300} height={300} image={galleryImages[3].image} />
        <GalleryBox width={350} height={270} image={galleryImages[4].image} />
        <GalleryBox width={400} height={200} image={galleryImages[5].image} />
      </div>
    </Container>
  </div>
)

Gallery.propTypes = {
  galleryImages: PropTypes.array,
}

export default Gallery;