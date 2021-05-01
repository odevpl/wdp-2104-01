import { connect } from 'react-redux';
import Gallery from './Gallery.js';
import { getGalleryData } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  gallery: getGalleryData(state),
});

export default connect(mapStateToProps)(Gallery);
