import React from 'react';
import styles from './CompareBar.module.scss';
import Button from '../../common/Button/Button';
import CompareProduct from '../../common/CompareProduct/CompareProduct';
import PropTypes from 'prop-types';

const CompareBar = ({ products, comparingAddRemove }) => {
  if (products.length === 0) {
    return null;
  }
  return (
    <div className={styles.component}>
      {products.map(product => (
        <CompareProduct
          key={product.id}
          comparingAddRemove={comparingAddRemove}
          {...product}
        />
      ))}
      <Button variant='main'>Compare</Button>
    </div>
  );
};

CompareBar.propTypes = {
  products: PropTypes.array,
  comparingAddRemove: PropTypes.func,
};
export default CompareBar;
