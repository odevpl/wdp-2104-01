import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { getAll, comparingAddRemove } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  comparingAddRemove: productId => dispatch(comparingAddRemove(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
