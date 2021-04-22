import React from 'react';
import PropTypes from 'prop-types';

import styles from './HotDealProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faExchangeAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';

const HotDealProductBox = ({
  name,
  price,
  oldPrice,
  promo,
  stars,
  id,
  comparingAddRemove,
  image,
  addFavorite,
  removeFavorite,
  favorite,
}) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img src={image} alt={name} className={styles.img} />
      {promo && <div className={styles.sale}>{promo}</div>}
      <div className={styles.buttons}></div>
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map(i => (
          <a key={i} href='#'>
            {i <= stars ? (
              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
            )}
          </a>
        ))}
      </div>
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faEye}>Go to item</FontAwesomeIcon>
        </Button>
        <Button
          onClick={event => {
            event.preventDefault();
            favorite ? removeFavorite(id) : addFavorite(id);
          }}
          variant='outline'
          active={
            id === 'aenean-ru-bristique-1'
              ? true
              : id === 'aenean-ru-bristique-3'
              ? true
              : false
          }
          favorite={favorite ? true : false}
        >
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button
          onClick={event => {
            comparingAddRemove(id);
            event.preventDefault();
          }}
          variant='outline'
          active={
            id === 'aenean-ru-bristique-2'
              ? true
              : id === 'aenean-ru-bristique-3'
              ? true
              : false
          }
        >
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.price}>
        <Button noHover variant='small'>
          $ {price}
        </Button>
      </div>
      <div className={styles.oldPrice}>
        <Button noHover variant='small'>
          $ {oldPrice}
        </Button>
      </div>
    </div>
  </div>
);

HotDealProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  id: PropTypes.string,
  comparingAddRemove: PropTypes.func,
  image: PropTypes.string,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
  favorite: PropTypes.bool,
};

export default HotDealProductBox;
