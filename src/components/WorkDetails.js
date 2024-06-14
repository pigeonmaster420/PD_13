import React from 'react';
import '../App.css'; // Обновленный путь

function WorkDetails() {
  return (
    <div className="work-details">
      <input type="text" className="input title" placeholder="Название работы" />
      <textarea className="input description" placeholder="Описание работы блаблаблабла ссылка на методичку: https://link.link/"></textarea>
      <div className="file-upload">
        <input type="text" className="input file-name" placeholder="rabota.zip" />
        <button className="button browse">обзор...</button>
      </div>
      <input type="text" className="input link" placeholder="https-ссылка на работу..." />
    </div>
  );
}

export default WorkDetails;
