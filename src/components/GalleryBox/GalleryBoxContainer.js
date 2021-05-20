import { connect } from 'react-redux'
import GalleryBox from './GalleryBox.js';
import { modalOpen } from '../../redux/modalRedux';

const mapDispatchToProps = dispatch => ({
  modalOpen: payload => dispatch(modalOpen(payload)),
});

export default connect(null, mapDispatchToProps)(GalleryBox)