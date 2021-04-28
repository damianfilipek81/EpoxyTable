import { getHomeImages } from '../../redux/homeRedux.js';
import { connect } from 'react-redux'
import Home from './Home.js';

const mapStateToProps = state => ({
  homeImages: getHomeImages(state),
})

export default connect(mapStateToProps)(Home)