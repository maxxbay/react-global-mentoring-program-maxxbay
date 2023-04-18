import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import FocusTrap from 'focus-trap-react';
import './Dialog.scss';

const Dialog = ({ title, children, onClose }) => {
  return (
    <Portal>
      <FocusTrap>
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
        </div>
      </FocusTrap>
    </Portal>
  );
};
Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Dialog;
