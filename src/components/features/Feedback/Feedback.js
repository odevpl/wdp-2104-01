import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';

class Feedback extends React.Component {
  render() {
    const { feedbacks } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.feedbackBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.feedbackHeading}>
                <h3>Client Feedback</h3>
              </div>
              <div className={'col ' + styles.menu}></div>
              <div className={'col-auto ' + styles.orangeDots}>
                <ul>
                  <li className={styles.orangeDots}>
                    <a className={styles.active} href='#'> page1 </a>
                  </li>
                  <li className={styles.orangeDots}>
                    <a href='#'> page2 </a>
                  </li>
                  <li className={styles.orangeDots}>
                    <a href='#'> page3 </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={'row ' + styles.feedbackLine}>
          {feedbacks.map(feedback => {
            return (
              <div className={styles.feedbackBox} key={feedback.id}>
                <div className={styles.icon}>
                  <img src={feedback.icon} alt='' />
                </div>
                <div className={styles.quote}>{feedback.quote}</div>
                <div className={styles.imageName}>
                  <div className={styles.imageBox}>
                    <img src={feedback.image} alt='' />
                  </div>
                  <div className={styles.nameBox}>{feedback.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.string,
      quote: PropTypes.string,
      image: PropTypes.node,
      name: PropTypes.string,
    })
  ),
};

Feedback.defaultProps = {
  feedbacks: [],
};

export default Feedback;