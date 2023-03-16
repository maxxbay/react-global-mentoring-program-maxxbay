import React from 'react';
import './Button.scss';

const ButtonSearch = ({ children, type }) => {
  return (
    <button className={'button'} type={type}>
      {children}
    </button>
  );
};

export default ButtonSearch;
