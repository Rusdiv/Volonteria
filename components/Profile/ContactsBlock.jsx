import React from 'react';
import { Row } from 'antd';

import DescriptionItem from './DescriptionItem';

export default function ContactsData() {
  return (
    <div>
      <p className="site-description-item-profile-p">Контакты</p>
      <Row>
        <DescriptionItem title="Email" content="volonteriaNK@example.com" />
        <DescriptionItem title="Номер телефона" content="+7 999-888-77-66" />
      </Row>
    </div>
  );
}
