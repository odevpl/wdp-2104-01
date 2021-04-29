import React from 'react';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import CompareBar from '../../features/CompareBar/CompareBarContainer';
import FeaturedSection from '../../features/FeaturedSection/FeaturedSectionContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeaturedSection />
    <FeatureBoxes />
    <NewFurniture />
    <Feedback />
    <CompareBar />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
