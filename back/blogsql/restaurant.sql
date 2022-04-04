SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

DROP DATABASE IF EXISTS restaurant;
CREATE DATABASE IF NOT EXISTS restaurant;

USE restaurant;

CREATE TABLE `user`(
    `id` int NOT NULL,
    `username` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `plat` (
  `id` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `description` varchar(500) NOT NULL,
  `price` decimal
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `boisson` (
  `id` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `price` decimal
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `table` (
    `id` int NOT NULL,
    `slot` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `reservation` (
    `id` int NOT NULL,
    `email` varchar(255) NOT NULL,
    `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `plat_reservation` (
    `id` int NOT NULL,
    `idPlat` int NOT NULL,
    `idReservation` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `boisson_reservation` (
    `id` int NOT NULL,
    `idBoisson` int NOT NULL,
    `idReservation` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `table_reservation` (
    `id` int NOT NULL,
    `idTable` int NOT NULL,
    `idReservation` int NOT NULL,
    `startDate` DATETIME NOT NULL,
    `endDate` DATETIME NOT NULL,
    `nbPoeple` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `user`
    ADD PRIMARY KEY (`id`);

ALTER TABLE `boisson`
    ADD PRIMARY KEY (`id`);

ALTER TABLE `plat`
    ADD PRIMARY KEY (`id`);

ALTER TABLE `table`
    ADD PRIMARY KEY (`id`);

ALTER TABLE `reservation`
    ADD PRIMARY KEY (`id`);

ALTER TABLE `plat_reservation`
    ADD PRIMARY KEY (`id`),
  ADD KEY `idPlat` (`idPlat`),
  ADD KEY `idReservation` (`idReservation`);

ALTER TABLE `boisson_reservation`
    ADD PRIMARY KEY (`id`),
  ADD KEY `idBoisson` (`idBoisson`),
  ADD KEY `idReservation` (`idReservation`);

ALTER TABLE `table_reservation`
    ADD PRIMARY KEY (`id`),
  ADD KEY `idTable` (`idTable`),
  ADD KEY `idReservation` (`idReservation`);

ALTER TABLE `user`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `plat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `boisson`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `reservation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `plat_reservation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `boisson_reservation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `table_reservation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `plat_reservation`
    ADD CONSTRAINT `plat_ibfk_1` FOREIGN KEY (`idPlat`) REFERENCES `plat` (`id`),
    ADD CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`idReservation`) REFERENCES `reservation` (`id`);

ALTER TABLE `boisson_reservation`
    ADD CONSTRAINT `boisson_ibfk_1` FOREIGN KEY (`idBoisson`) REFERENCES `boisson` (`id`),
    ADD CONSTRAINT `reservation_ibfk_2` FOREIGN KEY (`idReservation`) REFERENCES `reservation` (`id`);

ALTER TABLE `table_reservation`
    ADD CONSTRAINT `table_ibfk_1` FOREIGN KEY (`idTable`) REFERENCES `table` (`id`),
    ADD CONSTRAINT `reservation_ibfk_3` FOREIGN KEY (`idReservation`) REFERENCES `reservation` (`id`);