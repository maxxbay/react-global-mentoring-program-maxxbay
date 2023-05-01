import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

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
