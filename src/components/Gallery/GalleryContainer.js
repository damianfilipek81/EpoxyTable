import { getGalleryImages } from '../../redux/galleryRedux.js';
import { connect } from 'react-redux';
import Gallery from './Gallery.js';

const mapStateToProps = state => ({
  galleryImages: getGalleryImages(state),
})

export default connect(mapStateToProps)(Gallery)