import React from 'react';
import logo from '../Logo/netflixroulette.svg';
import './NetflixLogo.scss';

const NetflixLogo = () => {
  return (
    <div className="netflixLogo-header">
      <span className="logo-symbol"></span>
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default NetflixLogo;
