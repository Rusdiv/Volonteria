import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
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
  const { name, id, avatar, points } = authCtx.userData;
  const { isLoggedIn } = authCtx;

  const router = useRouter();

  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      router.push('/login');
    }
  }, [authCtx.isLoggedIn]);

  return (
    <div>
      {isLoggedIn ? (
        <Row>
          <Col span={12}>
            <Avatar
              size={64}
              icon={
                avatar ? <img src={avatar} alt="avatar" /> : <UserOutlined />
              }
            />
            <p className="site-description-item-profile-p">
              Персональные данные
            </p>
            <Row>
              <Col span={12}>
                <DescriptionItem title="Имя" content={name} />
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
                  content="2 февраля, 1994"
                />
              </Col>
              <Col span={12}>
                <DescriptionItem title="Кол-во очков" content={points} />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <DescriptionItem
                  title="Статус"
                  content="Сказанное слово не может быть сказано тем, кто его не сказал"
                />
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
            <Timeline>
              <Timeline.Item>
                Выступление на 1 сентября 2021-09-01
              </Timeline.Item>
              <Timeline.Item>
                Раздача флажков ко дню флага 2021-11-24
              </Timeline.Item>
              <Timeline.Item>Субботник 2015-09-01</Timeline.Item>
            </Timeline>
            <p>Мойдодыр</p>
            <Progress
              style={{ margin: '0 auto' }}
              width={80}
              type="circle"
              percent={23}
            />
          </Col>
        </Row>
      ) : (
        <p>Войдите в аккаунт</p>
      )}
    </div>
  );
}
