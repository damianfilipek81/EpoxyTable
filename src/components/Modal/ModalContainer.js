import { connect } from 'react-redux'
import Modal from './Modal.js';
import {getModalData, modalClose} from '../../redux/modalRedux';

const mapStateToProps = state => ({
  modalData: getModalData(state),
});

const mapDispatchToProps = dispatch => ({
  modalClose: payload => dispatch(modalClose(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(Modal)