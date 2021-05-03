import React from 'react';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import CompareBar from '../../features/CompareBar/CompareBarContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';
import FeaturedSection from '../../features/FeaturedSection/FeaturedSectionContainer';
import Promotion from '../../views/Promotion/PromotionContainer';
import Gallery from '../../features/Gallery/GalleryContainer';
import ChatBot from '../../features/ChatBot/ChatBot';

const Homepage = () => (
  <div className={styles.root}>
    <FeaturedSection />
    <FeatureBoxes />
    <Promotion />
    <NewFurniture />
    <Feedback />
    <Gallery />
    <CompareBar />
    <ChatBot />
  </div>
);

export default Homepage;
