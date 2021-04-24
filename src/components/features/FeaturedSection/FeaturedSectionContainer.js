import { connect } from 'react-redux';

import FeaturedSection from './FeaturedSection';

const mapStateToProps = state => ({
  hotDeals: state.hotDeals,
});

export default connect(mapStateToProps)(FeaturedSection);
