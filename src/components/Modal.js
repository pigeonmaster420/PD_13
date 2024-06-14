// src/components/Modal.js
import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-body">
          <div className="left-section">
            <button className="subject-button">ПРЕДМЕТ</button>
            <button className="semester-button">3 семестр</button>
            <input type="text" placeholder="Название работы" className="work-title" />
            <textarea placeholder="Описание работы блаблаблабла ссылка на методичку: https://link.link/" className="work-description"></textarea>
            <div className="file-upload">
              <input type="text" value="rabota.zip" readOnly />
              <button className="file-button">обзор...</button>
            </div>
            <input type="text" placeholder="https-ссылка на работу..." className="link-input" />
          </div>
          <div className="right-section">
            <div className="status-block">
              <h2>СТАТУС РАБОТЫ</h2>
              <div className="status-icon">🕒</div>
              <div className="status-text">Проверяется</div>
            </div>
            <button className="save-button">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
