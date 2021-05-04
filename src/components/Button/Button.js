import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ children, handlePageChange, pageNumber }) => {
  const executeScroll = () => {
    handlePageChange(pageNumber);
  };
  return (
    <div className={styles.root}>
      <div onClick={executeScroll}>
        {children}
      </div>
    </div>
  )
}
Button.propTypes = {
  children: PropTypes.string,
  handlePageChange: PropTypes.func,
  pageNumber: PropTypes.number,
}

export default Button;