// src/components/PendingModal.js
import React from 'react';
import './Modal.css';

function PendingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-body">
          <h2>Работа на проверке</h2>
          <p>Ваша лабораторная работа находится на проверке. Пожалуйста, подождите.</p>
          <button className="save-button" onClick={onClose}>Закрыть</button>
        </div>
      </div>
    </div>
  );
}

export default PendingModal;
