import React from 'react';
import Button from '../Button/Button';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import styles from './CompareProduct.module.scss';

const CompareProduct = ({ image, price, compare, comparingAddRemove, id }) => {
  const { component, imageContainer, cover, button } = styles;

  return (
    <div className={component}>
      <div className={imageContainer}>
        <img src={image} alt='comparing product' />
      </div>
      <p>$ {price}</p>
      <div className={cover}>
        <Button
          active={compare}
          onClick={event => {
            comparingAddRemove(id);
            event.preventDefault();
          }}
        >
          <Icon className={button} icon={faTimes} />
        </Button>
      </div>
    </div>
  );
};

CompareProduct.propTypes = {
  image: PropTypes.string,
  price: PropTypes.string,
  compare: PropTypes.bool,
  comparingAddRemove: PropTypes.func,
  id: PropTypes.string,
};
export default CompareProduct;
