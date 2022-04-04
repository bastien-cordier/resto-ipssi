

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS restaurant;

USE blog;

CREATE TABLE `restaurant_user`(
    `id` int NOT NULL,
    `username` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `plat` (
  `id` int(11) NOT NULL,
  `nom` varchar(120) NOT NULL,
  `description` varchar(500) NOT NULL,
  `prix` float,
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `boisson` (
  `id` int(11) NOT NULL,
  `nom` varchar(120) NOT NULL,
  `prix` float,
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `table` (
    `id` int NOT NULL,
    `slot` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `reservation` (
    `id` int NOT NULL,
    `email` varchar(255) NOT NULL,
    `status` varchar(255) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `plat_reservation` (
    `id` int NOT NULL,
    `id_table` int NOT NULL,
    `id_reservation` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `boisson_reservation` (
    `id` int NOT NULL,
    `id_boisson` int NOT NULL,
    `id_reservation` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `table_reservation` (
    `id` int NOT NULL,
    `id_table` int NOT NULL,
    `id_reservation` int NOT NULL,
    `startDate` DATETIME NOT NULL,
    `endDate` DATETIME NOT NULL,
    `personne` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `plat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMEN;

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
  