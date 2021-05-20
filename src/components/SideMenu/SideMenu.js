import React from 'react';
import styles from './SideMenu.module.scss';
import PropTypes from 'prop-types';

const SideMenu = ({ handlePageChange }) => (
  <div className={styles.root}>
    <div className={styles.hamburger}>
      <div className={styles.topBun}></div>
      <div className={styles.meat}></div>
      <div className={styles.botBun}></div>
      <ul>
        <li onClick={()=>handlePageChange(0)}>Strona główna</li>
        <li onClick={()=>handlePageChange(1)}>O nas</li>
        <li onClick={()=>handlePageChange(2)}>Galeria</li>
        <li onClick={()=>handlePageChange(3)}>Nasze produkty</li>
        <li onClick={()=>handlePageChange(4)}>Kontakt</li>
      </ul>
    </div>
  </div>
)

SideMenu.propTypes = {
  handlePageChange: PropTypes.func,
}

export default SideMenu;