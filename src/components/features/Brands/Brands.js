import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';
import Carousel from 'react-elastic-carousel';

const Brands = ({ brands }) => {
  const { slider } = styles;
  const breakPoints = [{ width: 1074, itemsToShow: 6, itemsToScroll: 6 }];

  return (
    <div className={slider}>
      <div className='container'>
        <div className='row'>
          <Carousel breakPoints={breakPoints}>
            {brands.map(item => (
              <div key={item.id}>
                <img src={item.image} alt='marshall' />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

Brands.propTypes = {
  brands: PropTypes.node,
};
export default Brands;
