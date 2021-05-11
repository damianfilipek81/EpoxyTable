import React, { useState, useEffect  } from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import { Container } from '@material-ui/core';
import GalleryBox from '../GalleryBox/GalleryBox';

const Gallery = ({ galleryImages }) => {
  const [activePage, setActivePage] = useState(0);
  const [animation, setAnimation] = useState(styles.slideOut);

  const handlePageChange = (newPage) => {
    setActivePage(newPage)
    setAnimation(styles.slideIn)
  }

  const pagesCount = Math.ceil(galleryImages.length / 6)

  const dots = [];
  for (let i = 0; i < pagesCount; i++) {
    dots.push(
      <li key={i}>
        <span
          onClick={() => handlePageChange(i)}
          className={i === activePage ? styles.active : undefined}
        >
        </span>
      </li>
    );
  }

  const activeImages = galleryImages.slice(activePage * 6, (activePage + 1) * 6);

  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <div className={`${styles.wrapper} ${animation}`}>
          <h2 className={styles.title}>Galeria</h2>
          <GalleryBox width={400} height={200} image={activeImages[0].image} />
          {activeImages[1] ? <GalleryBox width={300} height={300} image={activeImages[1].image} /> : null}
          {activeImages[2] ? <GalleryBox width={350} height={270} image={activeImages[2].image} /> : null}
          {activeImages[3] ? <GalleryBox width={300} height={300} image={activeImages[3].image} /> : null}
          {activeImages[4] ? <GalleryBox width={350} height={270} image={activeImages[4].image} /> : null}
          {activeImages[5] ? <GalleryBox width={400} height={200} image={activeImages[5].image} /> : null}
        </div>
        <div className={styles.dots}>
          <ul>
            {dots}
          </ul>
        </div>
      </Container>
    </div>
  )
}

Gallery.propTypes = {
  galleryImages: PropTypes.array,
}

export default Gallery;