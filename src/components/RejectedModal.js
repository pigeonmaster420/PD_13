// src/components/RejectedModal.js
import React from 'react';
import './Modal.css';

function RejectedModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-body">
          <h2>Работа Не принята</h2>
          <p>Ваша лабораторная работа не принята. Пожалуйста, исправьте замечания и попробуйте снова.</p>
          <button className="save-button" onClick={onClose}>Закрыть</button>
        </div>
      </div>
    </div>
  );
}

export default RejectedModal;
