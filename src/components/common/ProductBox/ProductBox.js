import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faStar as faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import Stars from '../Stars/StarsContainer';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  id,
  comparingAddRemove,
  image,
  addFavorite,
  removeFavorite,
  favorite,
  userStars,
}) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img src={image} alt={name} className={styles.img} />
      {promo && <div className={styles.sale}>{promo}</div>}
      <div className={styles.buttons}>
        <Button variant='small'>Quick View</Button>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
      <Stars id={id} stars={stars} userStars={userStars} />
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
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
        <div className={styles.oldPrice}>$25</div>
        <Button noHover variant='small'>
          ${price}
        </Button>
      </div>
    </div>
  </div>
);

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  id: PropTypes.string,
  comparingAddRemove: PropTypes.func,
  image: PropTypes.string,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
  favorite: PropTypes.bool,
  userStars: PropTypes.number,
};

export default ProductBox;
