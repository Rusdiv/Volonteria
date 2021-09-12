import React from 'react';
import { Col } from 'antd';

export default function DescriptionItem({ title = '', content = '' }) {
  return (
    <Col span={12}>
      <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title}:</p>
        {content}
      </div>
    </Col>
  );
}
