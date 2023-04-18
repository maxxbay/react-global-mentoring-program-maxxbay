import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

const Button = ({ children, type, className }) => {
  return (
    <button className={`button ${className}`} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
};
export default Button;
