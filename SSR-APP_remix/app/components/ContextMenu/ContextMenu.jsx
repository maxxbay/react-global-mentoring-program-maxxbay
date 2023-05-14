import React, { useState } from 'react';
import PropTypes from 'prop-types';

import stylesUrl from '~/styles/ContextMenu.css';

export function ContextMenuLinks() {
  return <link rel="stylesheet" href={stylesUrl} />;
}

const ContextMenu = ({ show, onClose, onEdit, onDelete }) => {
  const handleEdit = e => {
    onEdit();
    onClose(e);
  };

  const handleDelete = e => {
    onDelete();
    onClose(e);
  };

  return (
    show && (
      <div className="context-menu">
        <button className="context-menu__item" onClick={handleEdit}>
          Edit
        </button>
        <button className="context-menu__item" onClick={handleDelete}>
          Delete
        </button>
      </div>
    )
  );
};
ContextMenu.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ContextMenu;
