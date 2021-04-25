import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ children }) => (
  <div className={styles.root}>
    {children}
  </div>
)

Button.propTypes = {
  children: PropTypes.string,
}

export default Button;