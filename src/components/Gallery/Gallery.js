import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import { Container } from '@material-ui/core';
import GalleryBox from '../GalleryBox/GalleryBox';

const Gallery = () => (
  <div className={styles.root}>
    <Container className={styles.wrapper}>
      <h2 className={styles.title}>Galeria</h2>
      <GalleryBox width={400} height={200} image={'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg'} />
      <GalleryBox width={300} height={300} image={'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg'} />
      <GalleryBox width={350} height={270} image={'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg'} />
      <GalleryBox width={300} height={300} image={'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg'} />
      <GalleryBox width={350} height={270} image={'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg'} />
      <GalleryBox width={400} height={200} image={'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg'} />
    </Container>
  </div>
)

Gallery.propTypes = {

}

export default Gallery;