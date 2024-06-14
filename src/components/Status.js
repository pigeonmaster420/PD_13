import React from 'react';
import '../App.css';

function Status() {
  return (
    <div className="status">
      <div className="status-header">СТАТУС РАБОТЫ</div>
      <div className="status-body">
        <img src="/clock.png" alt="Clock" className="status-clock" />
        <div className="status-text">Проверяется</div>
      </div>
    </div>
  );
}

export default Status;
