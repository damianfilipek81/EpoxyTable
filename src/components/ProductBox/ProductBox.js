import React from 'react';
import styles from './ProductBox.module.scss';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const ProductBox = ({ name, description, image, price }) => (
  <Card className={styles.root}>
    <CardActionArea className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <CardMedia
          className={styles.image}
          image={image}
          title={name}
        />
      </div>
      <CardContent>
        <div className={styles.titles}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Od {price} zł!
        </Typography>
        </div>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
)

ProductBox.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
}
export default ProductBox;