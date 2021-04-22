import React from 'react';
import styles from './FeaturedSection.module.scss';
import PropTypes from 'prop-types';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HotDealProductBox from '../HotDealProductBox/HotDealProductBox';
// import {Swipe, Position} from 'react-swipe-component';

const FeaturedSection = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={'col ' + styles.hotDeals}>
            <div className={'row ' + styles.topBar}>
              <div className={'col ' + styles.text}>HOT DEALS</div>
              <div className={'col ' + styles.dots}>
                <FontAwesomeIcon icon={faCircle}>dots</FontAwesomeIcon>
                <FontAwesomeIcon icon={faCircle}>dots</FontAwesomeIcon>
                <FontAwesomeIcon icon={faCircle}>dots</FontAwesomeIcon>
              </div>
            </div>
            <HotDealProductBox />
          </div>
          <div className={'col ' + styles.slide}></div>
        </div>
      </div>
    </div>
  );
};

// FeaturedSection.propTypes = {
// };
export default FeaturedSection;
