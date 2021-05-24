import React, { useState } from 'react';
import styles from './SideMenu.module.scss';
import PropTypes from 'prop-types';

const SideMenu = ({ handlePageChange }) => {
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const handleSetDropdownMenu = () => (
    window.innerWidth < 426 ? setDropdownMenu(dropdownMenu => !dropdownMenu) : null
  );

  return (
    <div className={styles.root} onClick={() => handleSetDropdownMenu()}>
      <div className={dropdownMenu ? `${styles.hamburger} ${styles.dropdown}` : styles.hamburger} >
        <div className={styles.topBun}></div>
        <div className={styles.meat}></div>
        <div className={styles.botBun}></div>
        <ul>
          <li onClick={() => handlePageChange(0)}>Strona główna</li>
          <li onClick={() => handlePageChange(1)}>O nas</li>
          <li onClick={() => handlePageChange(2)}>Galeria</li>
          <li onClick={() => handlePageChange(3)}>Nasze produkty</li>
          <li onClick={() => handlePageChange(4)}>Kontakt</li>
        </ul>
      </div>
    </div>
  )
}

SideMenu.propTypes = {
  handlePageChange: PropTypes.func,
}

export default SideMenu;