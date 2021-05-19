import React from 'react';
import styles from './OurProducts.module.scss';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import ProductBox from '../ProductBox/ProductBox';
import Slider from "react-slick";


const OurProducts = ({ products }) => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    draggable: false,
    initialSlide: 1,
    arrows: false,
  };

  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <h2 className={styles.title}>Nasze produkty</h2>
        <Slider {...settings} className={styles.wrapper}>
          {products.map(product => (
            <ProductBox {...product} key={products.indexOf(product)} />
          ))}
        </Slider>
      </Container>
    </div>
  )
}

OurProducts.propTypes = {
  products: PropTypes.array,
}
export default OurProducts;