import React from 'react';
import styles from './OurProducts.module.scss';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import ProductBox from '../ProductBox/ProductBox';

const OurProducts = ({ products }) => (
  <div className={styles.root}>
    <Container className={styles.container}>
      <h2 className={styles.title}>Nasze produkty</h2>
      <div className={styles.wrapper}>
        <ProductBox {...products[0]} />
      </div>
    </Container>
  </div>
)

OurProducts.propTypes = {
  products: PropTypes.array,
}
export default OurProducts;