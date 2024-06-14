// src/components/TeacherPage.js
import React, { useState } from 'react';
import '../App.css';
import WorkTable from './WorkTable';
import AttachAssignmentModal from './AttachAssignmentModal';
import { FiEdit, FiPlus, FiArrowLeft } from 'react-icons/fi';

const reviewHeaders = ["Название работы", "ФИО", "Группа", "Дата выгрузки", "Файл", "Статус"];
const reviewRows = [
  ["Лабораторная работа №3", "Сергей Иванов", "231", "05.11.23", "работа.zip", "Не принято"],
  ["Лабораторная работа №1", "Алексей Смирнов", "231", "07.10.23", "работа.zip", "Принято"],
  ["Лабораторная работа №6", "Мария Кузнецова", "231", "14.11.23", "работа.zip", "На проверке"],
];

const assignmentHeaders = ["Название работы", "Сроки сдачи работы", "Задание"];
const assignmentRows = [
  ["Лабораторная работа №1", "14.10.23", "Прикрепить задание"],
  ["Лабораторная работа №2", "25.10.23", "Прикрепить задание"],
  ["Лабораторная работа №3", "10.11.23", "Прикрепить задание"],
];

function TeacherPage({ onPageChange }) {
  const [isAttachModalOpen, setAttachModalOpen] = useState(false);

  const handleAttachClick = () => {
    setAttachModalOpen(true);
  };

  const handleCloseAttachModal = () => {
    setAttachModalOpen(false);
  };

  return (
    <div className="teacher-page">
      <div className="header">
        <FiArrowLeft className="back-button" onClick={() => onPageChange('student')} />
        <h1>Тюменцев Евгений Александрович</h1>
        <div className="filters">
          <select>
            <option>2 курс</option>
            <option>3 курс</option>
            <option>4 курс</option>
          </select>
          <select>
            <option>Предмет</option>
          </select>
          <select>
            <option>Группа</option>
          </select>
        </div>
      </div>
      <div className="content">
        <WorkTable
          title="Работы студентов, ожидающих проверки"
          headers={reviewHeaders}
          rows={reviewRows.map(row => [...row, () => {}])}
          isAttachButton={false}
        />
        <WorkTable
          title="Выданные работы"
          headers={assignmentHeaders}
          rows={assignmentRows.map(row => [...row, handleAttachClick])}
          isAttachButton={true}
        />
      </div>
      <div className="actions">
        <button className="button add">
          <FiPlus /> Добавить
        </button>
        <button className="button edit">
          <FiEdit /> Редактировать
        </button>
      </div>
      <AttachAssignmentModal isOpen={isAttachModalOpen} onClose={handleCloseAttachModal} />
    </div>
  );
}

export default TeacherPage;
