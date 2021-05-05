import React, { useState } from 'react';
import styles from './GalleryBox.module.scss';
import PropTypes from 'prop-types';

const GalleryBox = ({ image, width, height }) => {
  const [modal, setModal] = useState(false);

  const handleSetModal = () => {
    setModal(modal => !modal)
  };

  return (
    <div>
      <div className={styles.root} style={{ height: height, maxWidth: width }} onClick={handleSetModal}>
        <img src={image} alt=''></img>
      </div>
      <div className={modal === true ? styles.modalOpen : styles.modalClose} onClick={handleSetModal}>
        <img src={image} alt=''></img>
      </div>
    </div>

  )
}

GalleryBox.propTypes = {
  image: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}
export default GalleryBox;