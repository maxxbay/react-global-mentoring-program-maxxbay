import React from 'react';
import PropTypes from 'prop-types';

import stylesUrl from '~/styles/Button.css';

export function ButtonLinks() {
  return <link rel="stylesheet" href={stylesUrl} />;
}

const Button = ({ children, type, className, onClick }) => {
  return (
    <button className={`button ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
