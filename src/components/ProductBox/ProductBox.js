import React from 'react';
import styles from './ProductBox.module.scss';
import PropTypes from 'prop-types';

const ProductBox = ({ products }) => (
  <div className={styles.root}>
    
  </div>
)

ProductBox.propTypes = {
  products: PropTypes.array,
}
export default ProductBox;