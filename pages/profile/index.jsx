import React, { useContext, useEffect, useState } from 'react';
import { Spin } from 'antd';
import axios from 'axios';

import ContactsBlock from '../../components/Profile/ContactsBlock';
import HistoryBlock from '../../components/Profile/HistoryBlock';
import AchievesBlock from '../../components/Profile/AchievesBlock';
import ChangeDataBlock from '../../components/Profile/ChangeDataBlock';
import AuthContext from '../../store/auth-context';

import styles from '../../components/Profile/profile.module.scss';

import protocol from '../../protocol';

export default function ProfilePage({ host = '' }) {
  const authCtx = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id, email, avatar } = authCtx.userData;

  useEffect(() => {
    const fetchUserData = async () => {
      const { data } = await axios.post(`${protocol}${host}/api/user/login`, {
        id,
      });

      const filteredUserData = {
        name: data.userInfo.name,
        lastname: data.userInfo.lastname,
        surname: data.userInfo.surname,

        date: data.userInfo.Dateof_birth,
        phone: data.userInfo.Phone_number,
        telegram: data.userInfo.telegram_id,
        workPlace: data.userInfo.ed_organization,

        points: data.userPoints.mycred_default,
        history: data.history,
        hours: data.hours.mycred_hours,
      };
      setUserData(filteredUserData);
      setIsLoading(false);
    };
    fetchUserData();
  }, []);

  return (
    <div className={styles.profile}>
      {!isLoading ? (
        <>
          <div className={styles.leftBlock}>
            <img className={styles.avatar} src={avatar} alt="avatar" />
            <h3>{`${userData.name} ${userData.surname}`}</h3>
            <div className={styles.mainUserData}>
              <div className={styles.points}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M5.41793 23.1645C4.83893 23.4615 4.18193 22.941 4.29893 22.2765L5.54393 15.1815L0.259433 10.1475C-0.234067 9.6765 0.0224333 8.8155 0.683933 8.7225L8.03093 7.6785L11.3069 1.188C11.6024 0.603002 12.4019 0.603002 12.6974 1.188L15.9734 7.6785L23.3204 8.7225C23.9819 8.8155 24.2384 9.6765 23.7434 10.1475L18.4604 15.1815L19.7054 22.2765C19.8224 22.941 19.1654 23.4615 18.5864 23.1645L11.9999 19.7805L5.41643 23.1645H5.41793Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {userData.points ? <span>{userData.points}</span> : 0}
              </div>
              <div className={styles.points}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9797 2.56C20.339 1.92668 19.4967 1.53787 18.5991 1.46114C17.7014 1.38441 16.8053 1.62461 16.0664 2.14C18.4416 3.12891 20.3819 4.93907 21.5331 7.24C21.9774 6.51038 22.1644 5.65287 22.0641 4.80451C21.9638 3.95614 21.582 3.16587 20.9797 2.56Z"
                    fill="white"
                  />
                  <path
                    d="M7.61347 2.28667C6.87762 1.70225 5.95331 1.4074 5.01498 1.45776C4.07665 1.50811 3.1892 1.90019 2.52013 2.56C1.85658 3.22794 1.46359 4.11774 1.41682 5.05809C1.37005 5.99844 1.67281 6.92285 2.2668 7.65334C3.33649 5.27336 5.2375 3.36523 7.61347 2.28667Z"
                    fill="white"
                  />
                  <path
                    d="M12.0001 2.66666C10.1573 2.67047 8.35695 3.21969 6.82584 4.24509C5.29473 5.27049 4.10142 6.72618 3.39632 8.4287C2.69121 10.1312 2.50586 12.0044 2.86364 13.8121C3.22141 15.6198 4.1063 17.2811 5.40676 18.5867L3.70676 20.2867C3.64504 20.3497 3.59634 20.4243 3.56343 20.5061C3.53053 20.588 3.51408 20.6755 3.51501 20.7637C3.51594 20.8519 3.53423 20.9391 3.56885 21.0203C3.60346 21.1014 3.65372 21.1749 3.71676 21.2367C3.77979 21.2984 3.85437 21.3471 3.93622 21.38C4.01808 21.4129 4.10561 21.4293 4.19383 21.4284C4.28204 21.4275 4.36921 21.4092 4.45036 21.3746C4.5315 21.34 4.60504 21.2897 4.66676 21.2267L6.44009 19.4533C8.06178 20.6805 10.0421 21.3401 12.0758 21.3305C14.1094 21.3209 16.0834 20.6425 17.6934 19.4L19.5201 21.2267C19.6476 21.3359 19.8117 21.393 19.9795 21.3865C20.1472 21.38 20.3064 21.3104 20.4251 21.1917C20.5439 21.073 20.6134 20.9138 20.6199 20.746C20.6264 20.5782 20.5693 20.4142 20.4601 20.2867L18.6668 18.52C19.9489 17.2067 20.8154 15.5445 21.1579 13.7413C21.5003 11.9381 21.3034 10.0739 20.592 8.38201C19.8805 6.69009 18.6859 5.24551 17.1577 4.22895C15.6295 3.21238 13.8355 2.66897 12.0001 2.66666ZM16.9801 14.2867C16.9037 14.4455 16.7676 14.5676 16.6014 14.6263C16.4353 14.685 16.2526 14.6756 16.0934 14.6L11.3334 12.2933V6.46C11.3334 6.28319 11.4037 6.11362 11.5287 5.98859C11.6537 5.86357 11.8233 5.79333 12.0001 5.79333C12.1769 5.79333 12.3465 5.86357 12.4715 5.98859C12.5965 6.11362 12.6668 6.28319 12.6668 6.46V11.46L16.6668 13.4C16.7466 13.4366 16.8183 13.4886 16.878 13.5531C16.9376 13.6175 16.984 13.6931 17.0143 13.7755C17.0447 13.8578 17.0584 13.9454 17.0549 14.0331C17.0513 14.1209 17.0304 14.207 16.9934 14.2867H16.9801Z"
                    fill="white"
                  />
                </svg>
                {userData.hours}
              </div>
            </div>

            <ContactsBlock
              email={email}
              phone={userData.phone}
              telegram={userData.telegram}
            />
          </div>
          <div className={styles.rightBlock}>
            <ChangeDataBlock
              name={userData.name}
              surname={userData.surname}
              email={email}
              date={userData.date}
            />
            <AchievesBlock />
            <HistoryBlock history={userData.history} />
          </div>
        </>
      ) : (
        <Spin />
      )}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { req } = context;

  return {
    props: { host: req.headers.host },
  };
};
