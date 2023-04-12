import React from 'react';
import './ContextMenu.scss';

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

export default ContextMenu;
