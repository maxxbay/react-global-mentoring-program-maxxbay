import React from 'react';
import './Button.scss';

const Button = ({ children, type, className }) => {
  return (
    <button className={`button ${className}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
