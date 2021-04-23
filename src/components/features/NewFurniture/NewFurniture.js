import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    activePageStyle: styles.fadeIn,
  };

  handlePageChange(newPage) {
    this.setState({ activePageStyle: styles.fadeOut });
    setTimeout(() => {
      this.setState({ activePage: newPage });
    }, 700);
    setTimeout(() => {
      this.setState({ activePageStyle: styles.fadeIn });
    }, 700);
  }

  handleCategoryChange(newCategory) {
    this.setState({ activePageStyle: styles.fadeOut });
    setTimeout(() => {
      this.setState({ activeCategory: newCategory });
    }, 700);
    setTimeout(() => {
      this.setState({ activePageStyle: styles.fadeIn });
    }, 700);
  }

  render() {
    const { categories, products, windowWidth } = this.props;
    const { activeCategory, activePage, activePageStyle } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(
      windowWidth > 768
        ? categoryProducts.length / 8
        : windowWidth > 425
        ? categoryProducts.length / 3
        : categoryProducts.length / 2
    );

    const desktopCards = categoryProducts.slice(activePage * 8, (activePage + 1) * 8);
    const tabletCards = categoryProducts.slice(activePage * 3, (activePage + 1) * 3);
    const mobileCards = categoryProducts.slice(activePage * 2, (activePage + 1) * 2);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className={'row no-gutters align-items-end ' + styles.wrapper}>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className={'row ' + activePageStyle}>
            {(windowWidth > 768
              ? desktopCards
              : windowWidth > 425
              ? tabletCards
              : mobileCards
            ).map(item => (
              <div key={item.id} className={styles.productWrapper}>
                <ProductBox {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
      favorite: PropTypes.bool,
    })
  ),
  windowWidth: PropTypes.number,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
