// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import WorkTable from './components/WorkTable';
import AcceptedModal from './components/AcceptedModal';
import RejectedModal from './components/RejectedModal';
import PendingModal from './components/PendingModal';
import AttachAssignmentModal from './components/AttachAssignmentModal';
import TeacherPage from './components/TeacherPage';

const checkHeaders = ["Название работы", "Дата выгрузки работы", "Статус"];
const checkRows = [
  ["Лабораторная работа №1", "07.10.23", "Принято"],
  ["Лабораторная работа №3", "05.11.23", "Не принято"],
  ["Лабораторная работа №6", "14.11.23", "На проверке"],
];

const performHeaders = ["Название работы", "Сроки сдачи работы", "Задание"];
const performRows = [
  ["Лабораторная работа №6", "14.10.23", "Прикрепить задание"],
  ["Лабораторная работа №6", "25.10.23", "Прикрепить задание"],
  ["Лабораторная работа №6", "10.11.23", "Прикрепить задание"],
];

function App() {
  const [currentPage, setCurrentPage] = useState('student');
  const [isAcceptedModalOpen, setAcceptedModalOpen] = useState(false);
  const [isRejectedModalOpen, setRejectedModalOpen] = useState(false);
  const [isPendingModalOpen, setPendingModalOpen] = useState(false);
  const [isAttachModalOpen, setAttachModalOpen] = useState(false);

  const handleRowClick = (status) => {
    if (status === "Принято") {
      setAcceptedModalOpen(true);
    } else if (status === "Не принято") {
      setRejectedModalOpen(true);
    } else if (status === "На проверке") {
      setPendingModalOpen(true);
    }
  };

  const handleAttachClick = () => {
    setAttachModalOpen(true);
  };

  const handleCloseAcceptedModal = () => {
    setAcceptedModalOpen(false);
  };

  const handleCloseRejectedModal = () => {
    setRejectedModalOpen(false);
  };

  const handleClosePendingModal = () => {
    setPendingModalOpen(false);
  };

  const handleCloseAttachModal = () => {
    setAttachModalOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <div className="toggle-page-button">
        <button onClick={() => setCurrentPage(currentPage === 'student' ? 'teacher' : 'student')}>
          Переключить на {currentPage === 'student' ? 'преподавателя' : 'студента'}
        </button>
      </div>
      {currentPage === 'student' ? (
        <div className="content">
          <WorkTable 
            title="Список работ, ожидающих проверки" 
            headers={checkHeaders} 
            rows={checkRows.map(row => [...row, handleRowClick])} 
            isAttachButton={false} 
          />
          <WorkTable 
            title="Список работ, ожидающих выполнения" 
            headers={performHeaders} 
            rows={performRows.map(row => [...row, handleAttachClick])} 
            isAttachButton={true} 
          />
        </div>
      ) : (
        <TeacherPage onPageChange={setCurrentPage} />
      )}
      <AcceptedModal isOpen={isAcceptedModalOpen} onClose={handleCloseAcceptedModal} />
      <RejectedModal isOpen={isRejectedModalOpen} onClose={handleCloseRejectedModal} />
      <PendingModal isOpen={isPendingModalOpen} onClose={handleClosePendingModal} />
      <AttachAssignmentModal isOpen={isAttachModalOpen} onClose={handleCloseAttachModal} />
    </div>
  );
}

export default App;
