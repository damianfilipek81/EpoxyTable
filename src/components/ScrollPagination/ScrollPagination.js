import React from 'react';
import styles from './ScrollPagination.module.scss';
import PropTypes from 'prop-types';

const ScrollPagination = ({ handlePageChange }) => (
  <div className={styles.root}>
    <span onClick={()=>handlePageChange(0)}></span>
    <span onClick={()=>handlePageChange(1)}></span>
    <span onClick={()=>handlePageChange(2)}></span>
    <span onClick={()=>handlePageChange(3)}></span>
    <span onClick={()=>handlePageChange(4)}></span>
  </div>
)

ScrollPagination.propTypes = {
  handlePageChange: PropTypes.func,
}

export default ScrollPagination;