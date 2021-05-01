import { connect } from 'react-redux';
import HotDealProductBox from './HotDealProductBox';

import {
  comparingAddRemove,
  removeFavorite,
  addFavorite,
} from '../../../redux/productsRedux';

const mapStateToProps = state => {
  return {
    hotDeals: state.hotDeals,
  };
};

const mapDispatchToProps = dispatch => ({
  comparingAddRemove: productId => dispatch(comparingAddRemove(productId)),
  addFavorite: payload => dispatch(addFavorite(payload)),
  removeFavorite: payload => dispatch(removeFavorite(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HotDealProductBox);
