import React, { useContext } from 'react';
import { Timeline } from 'antd';

import AuthContext from '../../store/auth-context';

export default function HistoryBlock() {
  const authCtx = useContext(AuthContext);
  const { history } = authCtx.userData;
  return (
    <div>
      <p className="site-description-item-profile-p">История мероприятий</p>
      <Timeline>
        {history.map((item) => (
          <Timeline.Item>{item}</Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
}
