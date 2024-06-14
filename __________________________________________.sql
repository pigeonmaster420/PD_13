SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `пользователи` (
  `ID_Пользователя` int(11) NOT NULL,
  `ФИО` varchar(50) NOT NULL,
  `Логин` varchar(30) NOT NULL,
  `Пароль` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `загрузка` (
  `ID_Загрузки` int(11) NOT NULL,
  `ID_Работы` int(11) NOT NULL,
  `ID_Студента` int(11) NOT NULL,
  `Выполненная_работа` text NOT NULL,
  `Дата_загрузки` date NOT NULL,
  `Статус` tinyint(1) NOT NULL,
  `Комментарий` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `работа` (
  `ID_Работы` int(11) NOT NULL,
  `ID_Пользователя` int(11) NOT NULL,
  `Предмет` varchar(50) NOT NULL,
  `Кому_выполнять` text NOT NULL,
  `Задание` text DEFAULT NULL,
  `Комментарий_к_заданию` text DEFAULT NULL,
  `Срок_сдачи` date DEFAULT NULL,
  `Название_работы` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `студенты` (
  `ID_Студента` int(11) NOT NULL,
  `ID_Пользователя` int(11) NOT NULL,
  `Направление` varchar(5) NOT NULL,
  `Номер_группы` tinyint(3) NOT NULL,
  `Номер_подгруппы` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;


ALTER TABLE `пользователи`
  ADD PRIMARY KEY (`ID_Пользователя`);

ALTER TABLE `загрузка`
  ADD PRIMARY KEY (`ID_Загрузки`),
  ADD KEY `ID_Работы` (`ID_Работы`),
  ADD KEY `ID_Студента` (`ID_Студента`);

ALTER TABLE `работа`
  ADD PRIMARY KEY (`ID_Работы`),
  ADD KEY `ID_Пользователя` (`ID_Пользователя`);

ALTER TABLE `студенты`
  ADD PRIMARY KEY (`ID_Студента`),
  ADD KEY `ID_Пользователя` (`ID_Пользователя`);


ALTER TABLE `пользователи`
  MODIFY `ID_Пользователя` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `загрузка`
  MODIFY `ID_Загрузки` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `работа`
  MODIFY `ID_Работы` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `студенты`
  MODIFY `ID_Студента` int(11) NOT NULL AUTO_INCREMENT;


ALTER TABLE `загрузка`
  ADD CONSTRAINT `загрузка_ibfk_1` FOREIGN KEY (`ID_Работы`) REFERENCES `работа` (`ID_Работы`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `загрузка_ibfk_2` FOREIGN KEY (`ID_Студента`) REFERENCES `студенты` (`ID_Студента`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `работа`
  ADD CONSTRAINT `работа_ibfk_1` FOREIGN KEY (`ID_Пользователя`) REFERENCES `пользователи` (`ID_Пользователя`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `студенты`
  ADD CONSTRAINT `студенты_ibfk_1` FOREIGN KEY (`ID_Пользователя`) REFERENCES `пользователи` (`ID_Пользователя`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
