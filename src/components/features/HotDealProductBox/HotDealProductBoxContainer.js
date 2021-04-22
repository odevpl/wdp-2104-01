import { connect } from 'react-redux';
import HotDealProductBox from './HotDealProductBox';
import {
  getAll,
  comparingAddRemove,
  removeFavorite,
  addFavorite,
} from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  hotDeals: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  comparingAddRemove: productId => dispatch(comparingAddRemove(productId)),
  addFavorite: payload => dispatch(addFavorite(payload)),
  removeFavorite: payload => dispatch(removeFavorite(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HotDealProductBox);
