import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const AuthContext = React.createContext({
  isLoggedIn: false,
  userData: {},
  onLogout: () => {},
  onLogin: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const loginHandler = async (login, password) => {
    // get main data about user
    const { data } = await axios.post('/api/user/login', {
      login,
      password,
    });

    const history = await axios.post('/api/user/getHistory', {
      id: data.id,
    });

    const filteredUserData = {
      name: data.userData.name,
      email: data.data.email,
      id: data.data.id,
      nick: data.data.nickname,
      avatar: data.data.avatar_urls[96],
      points: data.userData.mycred_default,
      lastname: data.userData.lastname,
      date: data.userData.Dateof_birth,
      surname: data.userData.surname,
      history: history.data,
    };
    setUserData({ ...filteredUserData });
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userData,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
