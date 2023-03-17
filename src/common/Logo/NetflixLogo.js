import React from 'react';
import logo from '../Logo/netflixroulette.svg';
import './NetflixLogo.scss';

const NetflixLogo = () => {
  return (
    <div className="netflixLogo-header">
      <span className="logo-symbol"></span>
      <a href="/">
        <img src={logo} alt="Logo" className="logo" />
      </a>
    </div>
  );
};

export default NetflixLogo;
