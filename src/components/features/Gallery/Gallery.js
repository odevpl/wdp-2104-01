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

class Gallery extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'top seller',
    activePageStyle: styles.fadeIn,
    activeImage: null,
  };

  handleCategoryChange(newCategory) {
    this.setState({ activePageStyle: styles.fadeOut });
    setTimeout(() => {
      this.setState({ activeCategory: newCategory });
    }, 700);
    setTimeout(() => {
      this.setState({ activePageStyle: styles.fadeIn });
    }, 700);
  }

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleImageChange(newImage) {
    this.setState({ activePageStyle: styles.fadeOut });
    setTimeout(() => {
      this.setState({ activeImage: newImage });
    }, 700);
    setTimeout(() => {
      this.setState({ activePageStyle: styles.fadeIn });
    }, 700);
  }

  render() {
    const { gallery, categories } = this.props;
    const { activeCategory, activePage, activePageStyle, activeImage } = this.state;
    const categoryProducts = gallery.filter(
      item => item.galleryCategory === activeCategory
    );
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <div className={styles.heading}>
                <h3>FURNITURE GALLERY</h3>
              </div>
              <div className={styles.contentWrapper}>
                <div className={styles.panelBar}>
                  {categories.map(item => (
                    <a
                      className={styles.panelButton}
                      key={item.id}
                      onClick={() => this.handleCategoryChange(item.id)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className={`${styles.photoWrapper} ${activePageStyle}`}>
                  <img
                    src={activeImage === null ? categoryProducts[0].image : activeImage}
                    alt=''
                    className={styles.photo}
                  ></img>
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
                <div className={`${styles.imagePicker} ${activePageStyle}`}>
                  <a onClick={() => this.handlePageChange(activePage - 1)}>{`<`}</a>
                  {categoryProducts
                    .slice(activePage * 5, (activePage + 1) * 5)
                    .map(product => (
                      <div key={product.id} className={styles.imageBox}>
                        <img
                          src={product.image}
                          alt=''
                          onClick={() => this.handleImageChange(product.image)}
                        ></img>
                      </div>
                    ))}
                  <a onClick={() => this.handlePageChange(activePage + 1)}>{`>`}</a>
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
  }
}

Gallery.propTypes = {
  gallery: PropTypes.array,
  categories: PropTypes.array,
};

export default Gallery;
