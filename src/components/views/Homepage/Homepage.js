import React from 'react';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import CompareBar from '../../features/CompareBar/CompareBarContainer';
import FeaturedSection from '../../features/FeaturedSection/FeaturedSectionContainer'; 
import Promotion from '../../views/Promotion/PromotionContainer';
import Gallery from '../../features/Gallery/GalleryContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeaturedSection />
    <FeatureBoxes />
    <Promotion />
    <NewFurniture />
    <Gallery />
    <CompareBar />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
