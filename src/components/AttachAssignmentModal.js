// src/components/AttachAssignmentModal.js
import React from 'react';
import './Modal.css';

function AttachAssignmentModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-body">
          <h2>Прикрепить задание</h2>
          <p>Пожалуйста, прикрепите задание к лабораторной работе.</p>
          <input type="file" />
          <button className="save-button" onClick={onClose}>Сохранить</button>
        </div>
      </div>
    </div>
  );
}

export default AttachAssignmentModal;
