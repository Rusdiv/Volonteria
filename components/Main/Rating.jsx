import React from 'react';

import styles from './Rating.module.scss';

export default function Rating() {
  return (
    <div className={styles.rating}>
      <p>Рейтинг волонтеров</p>
      <ul>
        <li>
          <div>1</div>
          <div className={styles.userData}>
            <div>Фото</div>
            <div>ФИО</div>
            <div>БАллы</div>
            <div>Время</div>
          </div>
        </li>
        <li>
          <div>2</div>
          <div className={styles.userData}>
            <div>Фото</div>
            <div>ФИО</div>
            <div>БАллы</div>
            <div>Время</div>
          </div>
        </li>
      </ul>
    </div>
  );
}
