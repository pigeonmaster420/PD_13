// src/components/AcceptedModal.js
import React from 'react';
import './Modal.css';

function AcceptedModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-body">
          <h2>Работа Принята</h2>
          <p>Ваша лабораторная работа принята. Поздравляем!</p>
          <button className="save-button" onClick={onClose}>Закрыть</button>
        </div>
      </div>
    </div>
  );
}

export default AcceptedModal;
