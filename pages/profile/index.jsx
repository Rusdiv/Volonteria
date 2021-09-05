import React, { useContext } from 'react';
import { Avatar, Timeline, Row, Col, Progress } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import AuthContext from '../../store/auth-context';

const DescriptionItem = ({ title = '', content = '' }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

export default function ProfilePage() {
  const authCtx = useContext(AuthContext);
  const { name, id, avatar, points, history, lastname, surname, date } = authCtx.userData;

  const year = date[0] + date[1] + date[2] + date[3];
  const month = date[4] + date[5];
  const day = date[6] + date[7];

  return (
    <div>
      <Row>
        <Col span={12}>
          <Avatar
            size={64}
            icon={avatar ? <img src={avatar} alt="avatar" /> : <UserOutlined />}
          />
          <h1 style={{ display: 'inline', marginLeft: 25, fontSize: 36 }}>
            {name}
          </h1>
          <p className="site-description-item-profile-p">Персональные данные</p>
          <Row>
            <Col span={12}>
              <DescriptionItem
                title="ФИО"
                content={`${surname} ${name} ${lastname}`}
              />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Id" content={id} />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Город" content="Нижнекамск" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Страна" content="Россия" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem
                title="Дата рождения"
                content={`${day} ${month} ${year} `}
              />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Кол-во очков" content={points} />
            </Col>
          </Row>
          <p className="site-description-item-profile-p">Контакты</p>
          <Row>
            <Col span={12}>
              <DescriptionItem
                title="Email"
                content="volonteriaNK@example.com"
              />
            </Col>
            <Col span={12}>
              <DescriptionItem
                title="Номер телефона"
                content="+7 999-888-77-66"
              />
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <p className="site-description-item-profile-p">История мероприятий</p>
          <Timeline>
            {history.map((item) => (
              <Timeline.Item>{item}</Timeline.Item>
            ))}
          </Timeline>
          <p className="site-description-item-profile-p">Достижения</p>
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: 15 }}>
              <p style={{ textAlign: 'center' }}>Дедуля</p>
              <Progress
                style={{ margin: '0 auto' }}
                width={80}
                type="circle"
                percent={100}
              />
            </div>
            <div>
              <p style={{ textAlign: 'center' }}>Мойдодыр</p>
              <Progress
                style={{ margin: '0 auto' }}
                width={80}
                type="circle"
                percent={23}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
