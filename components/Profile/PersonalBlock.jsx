import React, { useContext } from 'react';
import { Row } from 'antd';

import DescriptionItem from './DescriptionItem';
import AuthContext from '../../store/auth-context';

export default function PersonalData() {
  const authCtx = useContext(AuthContext);
  const { name, id, points, lastname, surname, date } = authCtx.userData;

  const year = date[0] + date[1] + date[2] + date[3];
  const month = date[4] + date[5];
  const day = date[6] + date[7];
  return (
    <div>
      <p className="site-description-item-profile-p">Персональные данные</p>
      <Row>
        <DescriptionItem
          title="ФИО"
          content={`${surname} ${name} ${lastname}`}
        />
        <DescriptionItem title="Id" content={id} />
      </Row>
      <Row>
        <DescriptionItem title="Город" content="Нижнекамск" />
        <DescriptionItem title="Страна" content="Россия" />
      </Row>
      <Row>
        <DescriptionItem
          title="Дата рождения"
          content={`${day} ${month} ${year} `}
        />
        <DescriptionItem title="Кол-во очков" content={points} />
      </Row>
    </div>
  );
}
