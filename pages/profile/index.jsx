import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Avatar,
  Timeline,
  Row,
  Col,
  Progress,
} from 'antd';
import { UserOutlined } from '@ant-design/icons';

import AuthContext from '../../store/auth-context';

export default function ProfilePage() {
  const authCtx = useContext(AuthContext);
  const {
    name,
    id,
    avatar,
    points,
  } = authCtx.userData;
  const { isLoggedIn } = authCtx;

  const router = useRouter();

  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      router.push('/login');
    }
  }, [authCtx.isLoggedIn, router]);

  return (
    <div>
      {isLoggedIn ? (
        <Row>
          <Col span={12}>
            <Row>
              <Col span={12}>
                <h2>{name}</h2>
                <Avatar
                  size={64}
                  icon={
                    avatar ? (
                      <img src={avatar} alt="avatar" />
                    ) : (
                      <UserOutlined />
                    )
                  }
                />
                <p>
                  id:
                  {id}
                </p>
                <p>{points}</p>
              </Col>
              <Col span={12}>
                <p>
                  Карма
                  <Progress percent={1} status="active" />
                </p>
                <p>
                  Выполнено мероприятий: 3
                  <Progress percent={100} />
                </p>
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
          </Col>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: 200,
            }}
          >
            <div>
              <p style={{ textAlign: 'center' }}>Мойдодыр</p>
              <Progress
                style={{ margin: '0 auto' }}
                width={80}
                type="circle"
                percent={23}
              />
            </div>
            <div>
              <p style={{ textAlign: 'center' }}>Аферист</p>
              <Progress
                style={{ margin: '0 auto' }}
                width={80}
                type="circle"
                percent={76}
              />
            </div>
          </div>
        </Row>
      ) : (
        <p>Войдите в аккаунт</p>
      )}
    </div>
  );
}
