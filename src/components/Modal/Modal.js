import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const Modal = ({ modalData, modalClose }) => {

  return modalData.product !== true ? (
    <div className={modalData.image != null ? styles.modalOpen : styles.modalClose} onClick={() => modalClose({image: null, product: false})}>
      <img src={modalData.image != null ? modalData.image : undefined} alt=''></img>
    </div>
  ) :
  (
    <div className={modalData.image != null ? styles.modalOpen : styles.modalClose} onClick={() => modalClose({image: null, product: false})}>
asdasdadssad    </div>
  )
}

Modal.propTypes = {
  modalData: PropTypes.object,
  modalClose: PropTypes.func,
}

export default Modal;