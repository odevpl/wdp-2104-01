import { connect } from 'react-redux';
import Gallery from './Gallery.js';
import { getGalleryData } from '../../../redux/productsRedux';
import { getGalleryCategories } from '../../../redux/categoriesRedux';

const mapStateToProps = state => ({
  gallery: getGalleryData(state),
  categories: getGalleryCategories(state),
});

export default connect(mapStateToProps)(Gallery);
