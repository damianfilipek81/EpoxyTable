import React from 'react';
import styles from './ProductBox.module.scss';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

const ProductBox = ({ name, description, image, priceOne, modalOpen, id }) => (
  <Card className={styles.root}>
    <CardActionArea className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <CardMedia
          className={styles.image}
          image={image}
          title={name}
        />
      </div>
      <CardContent className={styles.content}>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          Od {priceOne} zł!
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button className={styles.button} variant="outlined" onClick={() => modalOpen({ image, product: true, id })}>Więcej informacji</Button>
    </CardActions>
  </Card>
)

ProductBox.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  priceOne: PropTypes.string,
  modalOpen: PropTypes.func,
  id: PropTypes.number,
}
export default ProductBox;