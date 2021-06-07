import { connect } from 'react-redux'
import ProductBox from './ProductBox.js';
import { modalOpen } from '../../redux/modalRedux';

const mapDispatchToProps = dispatch => ({
  modalOpen: payload => dispatch(modalOpen(payload)),
});

export default connect(null, mapDispatchToProps)(ProductBox)