import React, { useState } from 'react';
import PropTypes, { number } from 'prop-types';
import styles from './Stars.module.scss';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Stars = ({ id, stars, userStars, changeUserStars }) => {
  const [move, setMove] = useState(null);
  const starsNumber = [1, 2, 3, 4, 5];
  return (
    <div className={styles.stars}>
      {starsNumber.map(item => {
        let number = stars;
        if (userStars) {
          number = userStars;
        } else {
          number = move;
        }

        return (
          <a href='#' key={2} className={userStars ? styles.userStars : ''}>
            <FontAwesomeIcon
              icon={item <= number ? faStar : farStar}
              onMouseOver={() => setMove(item)}
              onMouseLeave={() => setMove(null)}
              onClick={event => {
                event.preventDefault();
                return changeUserStars(id, item);
              }}
            >
              {item} stars
            </FontAwesomeIcon>
          </a>
        );
      })}
    </div>
  );
};

Stars.propTypes = {
  id: PropTypes.string,
  stars: PropTypes.number,
  userStars: number,
  changeUserStars: PropTypes.func,
};

export default Stars;
