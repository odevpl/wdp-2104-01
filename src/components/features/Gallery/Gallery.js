import React from 'react';
import styles from './Gallery.module.scss';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button.js';
import { faStar as farStar, faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';

const Gallery = ({ gallery }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <div className={styles.heading}>
            <h3>FURNITURE GALLERY</h3>
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.panelBar}>
              <a href='#' className={styles.panelButton}>
                FEATURED
              </a>
              <a href='#' className={styles.panelButton}>
                TOP SELLER
              </a>
              <a href='#' className={styles.panelButton}>
                SALE OFF
              </a>
              <a href='#' className={styles.panelButton}>
                TOP RATED
              </a>
            </div>
            <div className={styles.photoWrapper}>
              <img src={gallery[0].image} alt='' className={styles.photo}></img>
              <div className={styles.leftPanelBar}>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                  <span className={styles.tooltiptext}>Add to favorites</span>
                </Button>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faExchangeAlt}>Compare</FontAwesomeIcon>
                  <span className={styles.tooltiptext}>Compare product</span>
                </Button>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faEye}>Follow</FontAwesomeIcon>
                  <span className={styles.tooltiptext}>Follow</span>
                </Button>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faShoppingBasket}>Cart</FontAwesomeIcon>
                  <span className={styles.tooltiptext}>Add to cart</span>
                </Button>
              </div>
              <div className={styles.label}>
                <span>${gallery[0].price}</span>
                <h5>{gallery[0].name}</h5>
                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <a key={i} href='#'>
                      {i <= gallery[0].stars ? (
                        <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                      ) : (
                        <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.imagePicker}>
              <a href='#'>{`<`}</a>
              {gallery.map(product => (
                <div key={product.id} className={styles.imageBox}>
                  <img src={product.image} alt=''></img>
                </div>
              ))}
              <a href='#'>{`>`}</a>
            </div>
          </div>
        </div>
        <div className='col-6'>
          {gallery.map(product =>
            product.ad ? (
              <div key={product.id}>
                <img
                  key={product.id}
                  src={product.image}
                  alt=''
                  className={styles.ad}
                ></img>
                <div className={styles.adInfo}>
                  <p>
                    FROM <span>${product.price}</span>
                  </p>
                  <span>{product.name}</span>
                  <br />
                  <Button variant='outline' className={styles.button}>
                    SHOP NOW
                  </Button>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  </div>
);

Gallery.propTypes = {
  gallery: PropTypes.array,
};

export default Gallery;
