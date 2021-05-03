import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';
import Button from '../../common/Button/Button';

const Brands = ({ brands }) => {
  const { slider, box, prev, next } = styles;
  return (
    <div className={slider}>
      <div className='container'>
        <div className='row'>
          <Button className={prev}>
            <p>{'<'}</p>
          </Button>
          {brands.map(brand => (
            <div className='col' key={brand.id}>
              <div className={box}>
                <img src={brand.image} alt='marshall' />
              </div>
            </div>
          ))}
          <Button className={next}>
            <p>{'>'}</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

Brands.propTypes = {
  brands: PropTypes.node,
};
export default Brands;
