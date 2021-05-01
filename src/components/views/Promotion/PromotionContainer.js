import { connect } from 'react-redux';
import Promotion from './Promotion';
import { getAllPromotions } from '../../../redux/promotionRedux';

const mapStateToProps = state => ({
  promotion: getAllPromotions(state),
});

export default connect(mapStateToProps)(Promotion);
