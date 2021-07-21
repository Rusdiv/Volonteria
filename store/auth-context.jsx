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
    const { data } = await axios.post('/api/user/login', {
      login,
      password,
    });

    setUserData(data);
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
