import React from 'react';
import { Portal } from 'react-portal';
import FocusTrap from 'focus-trap-react';
import './Dialog.scss';

const Dialog = ({ title, children, onClose }) => {
  return (
    <Portal>
      <FocusTrap>
        <div className="dialog-overlay" onClick={onClose}>
          <div
            className="dialog"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
          >
            <header className="dialog-header">
              <h2 id="dialog-title">{title}</h2>
              <button className="dialog-close" onClick={onClose}>
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

export default Dialog;
