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

    // get secondary user data
    const secondaryUserData = await axios.post('/api/user/getPoints', {
      id: data.id,
    });

    const history = await axios.post('/api/user/getHistory', {
      id: data.id,
    });

    const filteredUserData = {
      name: secondaryUserData.data.name,
      email: data.email,
      id: data.id,
      nick: data.nickname,
      avatar: data.avatar_urls[96],
      points: secondaryUserData.data.mycred_default,
      lastname: secondaryUserData.data.lastname,
      date: secondaryUserData.data.Dateof_birth,
      surname: secondaryUserData.data.surname,
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
