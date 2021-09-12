import React from 'react';
import Achieve from './Achieve';

export default function AchievesBlock() {
  return (
    <div>
      <p className="site-description-item-profile-p">Достижения</p>
      <div style={{ display: 'flex' }}>
        <Achieve name="Программист" progress={1} />
        <Achieve name="Тупить" progress={100} />
      </div>
    </div>
  );
}
