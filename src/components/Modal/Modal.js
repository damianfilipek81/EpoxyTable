import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const Modal = ({modalData, modalClose}) => (
  <div className={modalData != null ? styles.modalOpen : styles.modalClose} onClick={()=> modalClose(null)}>
    <img src={modalData} alt=''></img>
  </div>
)

Modal.propTypes = {
  modalData: PropTypes.string,
  modalClose: PropTypes.func,
}

export default Modal;