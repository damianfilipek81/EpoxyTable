import React, { useState } from 'react';
import styles from './SideMenu.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll'

const SideMenu = ({ handlePageChange }) => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const screenWidth = window.innerWidth;

  const handleSetDropdownMenu = () => (
    screenWidth < 426 ? setDropdownMenu(dropdownMenu => !dropdownMenu) : null
  );

  return (
    <div className={styles.root} onClick={() => handleSetDropdownMenu()}>
      <div className={dropdownMenu ? `${styles.hamburger} ${styles.dropdown}` : styles.hamburger} >
        <div className={styles.topBun}></div>
        <div className={styles.meat}></div>
        <div className={styles.botBun}></div>
        {screenWidth > 425 ?
          <ul>
            <li onClick={() => handlePageChange(0)}>Strona główna</li>
            <li onClick={() => handlePageChange(1)}>O nas</li>
            <li onClick={() => handlePageChange(2)}>Galeria</li>
            <li onClick={() => handlePageChange(3)}>Nasze produkty</li>
            <li onClick={() => handlePageChange(4)}>Kontakt</li>
          </ul> :
          <ul>
            <Link to='home' onClick={() => handleSetDropdownMenu()} spy={true} smooth={true} duration={500}><li>Strona główna</li></Link>
            <Link to='aboutus' onClick={() => handleSetDropdownMenu()} spy={true} smooth={true} duration={500}><li>O nas</li></Link>
            <Link to='gallery' onClick={() => handleSetDropdownMenu()} spy={true} smooth={true} duration={500}><li>Galeria</li></Link>
            <Link to='ourproducts' onClick={() => handleSetDropdownMenu()} spy={true} smooth={true} duration={500}><li>Nasze produkty</li></Link>
            <Link to='contact' onClick={() => handleSetDropdownMenu()} spy={true} smooth={true} duration={500}><li>Kontakt</li></Link>
          </ul>
        }
      </div>
    </div>
  )
}

SideMenu.propTypes = {
  handlePageChange: PropTypes.func,
}

export default SideMenu;