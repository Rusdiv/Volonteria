import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.node.isRequired,
};

export default MyApp;
