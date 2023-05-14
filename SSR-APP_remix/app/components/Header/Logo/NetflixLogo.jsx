import React from 'react';
import stylesLogo from '~/styles/NetflixLogo.css';

export function LogoLinks() {
  return <link rel="stylesheet" href={stylesLogo} />;
}

const NetflixLogo = () => {
  return (
    <div className="netflix-logo">
      <span className="netflix-logo__netflix">netflix</span>
      <span className="netflix-logo__roulette">roulette</span>
    </div>
  );
};

export default NetflixLogo;
