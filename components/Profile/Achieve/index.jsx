import React from 'react';
import { Progress } from 'antd';

import styles from './achieve.module.scss';

export default function Achieve({ progress = 0, name = '' }) {
  return (
    <div className={styles.achieve}>
      <p>{name}</p>
      <Progress
        style={{ margin: '0 auto' }}
        width={80}
        type="circle"
        percent={progress}
      />
    </div>
  );
}
