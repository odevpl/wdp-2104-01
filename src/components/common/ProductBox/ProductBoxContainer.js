import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import {
  getAll,
  comparingAddRemove,
  removeFavorite,
  addFavorite,
} from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  comparingAddRemove: productId => dispatch(comparingAddRemove(productId)),
  addFavorite: payload => dispatch(addFavorite(payload)),
  removeFavorite: payload => dispatch(removeFavorite(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
