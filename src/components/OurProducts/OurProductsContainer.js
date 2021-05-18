import { getProducts } from '../../redux/ourProductsRedux';
import { connect } from 'react-redux';
import OurProducts from './OurProducts.js';

const mapStateToProps = state => ({
  products: getProducts(state),
})

export default connect(mapStateToProps)(OurProducts)