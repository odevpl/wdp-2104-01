import React from 'react';
import PropTypes from 'prop-types';

class Feedback extends React.Component {
  render() {
    const { feedbacks } = this.props;
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles}>
            <div className='row no-gutters align-items-end'>
              <div className='col-auto '>
                <h3>Client Feedback</h3>
              </div>
              <div className='col'></div>
              <div className='col-auto'>
                <ul>
                  <li className={styles}>
                    <a className={styles} href='#'>
                      page
                    </a>
                  </li>
                  <li className={styles}>
                    <a href='#'>page</a>
                  </li>
                  <li className={styles}>
                    <a href='#'>page</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={'row '}>
          {feedbacks.map(feedback => {
            return (
              <div className={styles} key={feedback.id}>
                <div className={styles}>
                  <img src={feedback.icon} alt='' />
                </div>
                <div className={styles}>{feedback.quote}</div>
                <div className={styles}>
                  <div className={styles}>
                    <img src={feedback} alt='' />
                  </div>
                  <div className={styles}>{feedback.name}</div>
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