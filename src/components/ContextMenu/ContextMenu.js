import React from 'react';
import './ContextMenu.scss';

const ContextMenu = ({ show, onClose, onEdit, onDelete }) => {
  const handleEdit = e => {
    e.stopPropagation();
    onEdit();
    onClose();
  };

  const handleDelete = e => {
    e.stopPropagation();
    onDelete();
    onClose();
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
