import React from 'react';
import styles from './GalleryBox.module.scss';
import PropTypes from 'prop-types';

const GalleryBox = ({ image, width, height, modalOpen }) => {
  return (
    <div className={styles.root} style={{ height: height, maxWidth: width }} onClick={() => modalOpen({image})}>
      <img src={image} alt=''></img>
    </div>
  )
}

GalleryBox.propTypes = {
  image: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  modalOpen: PropTypes.func,
}
export default GalleryBox;