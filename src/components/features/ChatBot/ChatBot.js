import React from 'react';
import styles from './ChatBot.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faTimes, faRobot } from '@fortawesome/free-solid-svg-icons';

class ChatBot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classSwitch: styles.active,
      chatBotClass: styles.displayNone,
    };
  }

  turnOnChat() {
    this.setState({ classSwitch: styles.displayNone, chatBotClass: styles.active });
  }

  turnOffChat() {
    this.setState({ classSwitch: styles.active, chatBotClass: styles.displayNone });
  }
  render() {
    const { classSwitch, chatBotClass } = this.state;
    return (
      <div className={styles.root}>
        <div
          className={styles.bubble + ' ' + classSwitch}
          onClick={() => this.turnOnChat()}
        >
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faCommentDots} />
            <div className={styles.text}>
              <span>Potrzebujesz pomocy?</span>
              <span>Napisz!</span>
            </div>
          </div>
        </div>

        <div className={styles.chat + ' ' + chatBotClass}>
          <div className={styles.chatHeader}>
            <div className={styles.user + ' col'}>
              <div className={styles.userPhoto}>
                <FontAwesomeIcon icon={faRobot} />
              </div>
              <div className={styles.userName}>Asystent</div>
            </div>
            <div className={styles.actionsIcons + ' col'}>
              <FontAwesomeIcon onClick={() => this.turnOffChat()} icon={faTimes} />
            </div>
          </div>
          <div className={styles.chatWindow}>
            <div className={styles.message}>Dzień dobry! W czym mogę pomóc?</div>
          </div>
          <div className={styles.chatInput}>
            <textarea placeholder={'Aa'}></textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatBot;
