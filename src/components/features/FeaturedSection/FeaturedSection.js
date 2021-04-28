import React from 'react';
import styles from './FeaturedSection.module.scss';
import PropTypes from 'prop-types';
import HotDealProductBox from '../HotDealProductBox/HotDealProductBoxContainer';
import Swipeable from '../../common/Swipeable/Swipeable';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

class FeaturedSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeElement: 1,
      activeElementStyle: styles.fadeIn,
      activeItem: 1,
      itemsCount: this.props.hotDeals.length,
      activeElementRight: 1,
    };
  }

  handleElementChangeLeft(elementNumber) {
    this.setState({ activeElementStyle: styles.fadeOut });
    setTimeout(() => {
      this.setState({ activeElement: elementNumber });
    }, 700);
    setTimeout(() => {
      this.setState({ activeElementStyle: styles.fadeIn });
    }, 700);
  }

  autoPlay(activeElement) {
    setTimeout(() => {
      if (activeElement === 2) {
        this.setState({ activeElement: activeElement - 2 });
      } else this.setState({ activeElement: activeElement + 1 });
    }, 3000);
  }

  handleElementChangeRight(elementNumber) {
    this.setState({ activeElementRightStyle: styles.fadeOut });
    setTimeout(() => {
      this.setState({ activeElementRight: elementNumber });
    }, 700);
    setTimeout(() => {
      this.setState({ activeElementRightStyle: styles.fadeIn });
    }, 700);
  }

  render() {
    const {
      activeElement,
      activeElementStyle,
      activeElementRight,
      activeElementRightStyle,
    } = this.state;
    this.autoPlay(activeElement);
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className={'col ' + styles.hotDeals}>
              <div className={'row ' + styles.topBar}>
                <div className={'col ' + styles.text}>HOT DEALS</div>
                <div className={'col ' + styles.dots}>
                  <FontAwesomeIcon
                    onClick={() => this.handleElementChangeLeft(0)}
                    icon={faCircle}
                  >
                    dots
                  </FontAwesomeIcon>
                  <FontAwesomeIcon
                    onClick={() => this.handleElementChangeLeft(1)}
                    icon={faCircle}
                  >
                    dots
                  </FontAwesomeIcon>
                  <FontAwesomeIcon
                    onClick={() => this.handleElementChangeLeft(2)}
                    icon={faCircle}
                  >
                    dots
                  </FontAwesomeIcon>
                </div>
              </div>
              <Swipeable
                itemsCount={this.state.itemsCount}
                activeItem={this.state.activeItem}
                onClick={() => this.freezeElement()}
                swipeAction={this.handleElementChangeLeft.bind(this)}
              >
                <div className={activeElementStyle}>
                  <HotDealProductBox {...this.props.hotDeals[activeElement]} />
                </div>
              </Swipeable>
            </div>
            <div className={'col ' + styles.slide}>
              <Swipeable
                itemsCount={this.itemsCount}
                activeItem={this.state.activeElementRight}
                swipeAction={this.handleElementChangeRight.bind(this)}
              >
                <div className={styles.slider}>
                  <img
                    className={activeElementRightStyle}
                    src={this.props.hotDeals[activeElementRight].image}
                    alt='sofa'
                  ></img>
                  <div className={styles.shopNow}></div>
                  <div className={styles.text}>
                    <span>
                      INDOOR <b>FURNITURE</b>
                    </span>
                    <span>SAVE UP TO 50% OF ALL FURNITURE</span>
                  </div>
                  <div>
                    <a className={styles.button}>SHOP NOW</a>
                  </div>
                </div>
                <div className={'row ' + styles.buttons}>
                  <div
                    className={'col ' + styles.buttonLeft}
                    onClick={() => this.handleElementChangeRight(1)}
                  >
                    {'<'}
                  </div>
                  <div
                    className={'col ' + styles.buttonRight}
                    onClick={() => this.handleElementChangeRight(2)}
                  >
                    {'>'}
                  </div>
                </div>
              </Swipeable>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FeaturedSection.propTypes = {
  hotDeals: PropTypes.array,
};

FeaturedSection.defaultProps = {
  hotDeals: [],
  state: [],
};

export default FeaturedSection;
