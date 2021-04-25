import React from 'react';
import { settings } from '../../settings.js';
import styles from './Logo.module.scss';

const Logo = () => (
  <div className={styles.root}>
    <img alt='' src={settings.logo} />
  </div>
);

export default Logo;