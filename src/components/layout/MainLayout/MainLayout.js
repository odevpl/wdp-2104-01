import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children, changeWidth }) => (
  <div>
    <Header />
    {children}
    {
      (changeWidth(window.innerWidth),
      window.addEventListener('resize', e => {
        changeWidth(e.currentTarget.innerWidth);
      }))
    }
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
  changeWidth: PropTypes.func,
};

export default MainLayout;
