import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import stylesUrl from '~/styles/Dialog.css';

export function DialogLinks() {
  return <link rel="stylesheet" href={stylesUrl} />;
}

const Dialog = ({ title, children, onClose }) => {
  console.log('Modal Dialog');
  return ReactDOM.createPortal(
    <div
      className="dialog-overlay"
      onClick={onClose}
      data-testid="dialog-overlay"
      tabIndex="-1"
    >
      <div
        className="dialog"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
      >
        <header className="dialog-header">
          <h2 id="dialog-title">{title}</h2>
          <button
            className="dialog-close"
            onClick={onClose}
            autoFocus
            tabIndex="0"
          >
            ×
          </button>
        </header>
        <div className="dialog-body">{children}</div>
      </div>
    </div>,
    document.body
  );
};

Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Dialog;
