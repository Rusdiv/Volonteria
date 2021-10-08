import React from 'react';
import Achieve from './Achieve';

import styles from './profile.module.scss';

export default function AchievesBlock() {
  return (
    <div>
      <div className={styles.achieves}>
        <Achieve name="5 посещенных мероприятий" />
        <Achieve name="10 посещенных мероприятий" />
        <Achieve name="1 год в организации" />
        <Achieve name="5 хороших отзывов" />
      </div>
    </div>
  );
}
