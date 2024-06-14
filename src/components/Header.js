import React from 'react';
import '../App.css';

function Header() {
  return (
    <header className="header">
      <div className="student-info">Студент Есенин Сергей Александрович, 3 курс</div>
      <div className="selectors">
        <select className="select">
          <option>1 семестр</option>
          <option>2 семестр</option>
          <option>3 семестр</option>
          <option>4 семестр</option>
          <option>5 семестр</option>
          <option>6 семестр</option>
          <option>7 семестр</option>
          <option>8 семестр</option>
        </select>
        <select className="select">
          <option>Практикум по программированию</option>
          <option>Математика</option>
          <option>Компьютерное зрение</option>
          <option>WEB программирование</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
