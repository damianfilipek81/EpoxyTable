import React from 'react';
import styles from './OurProducts.module.scss';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import ProductBox from '../ProductBox/ProductBox';

const OurProducts = ({ products }) => (
  <div className={styles.root}>
    <Container>
      <h2 className={styles.title}>Nasze produkty</h2>
      <ProductBox products={products} />
    </Container>
  </div>
)

OurProducts.propTypes = {
  products: PropTypes.array,
}
export default OurProducts;