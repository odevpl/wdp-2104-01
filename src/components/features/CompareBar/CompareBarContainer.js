import { connect } from 'react-redux';
import CompareBar from './CompareBar';
import { comparingAddRemove, compareProducts } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: compareProducts(state),
});

const mapDispatchToProps = dispatch => ({
  comparingAddRemove: productId => dispatch(comparingAddRemove(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompareBar);
