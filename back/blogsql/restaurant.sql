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

INSERT INTO `user` (`id`, `username`, `password`) VALUES
  (1, 'test', 'secret');

CREATE TABLE `plat` (
  `id` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `description` varchar(500) NOT NULL,
  `image` varchar(500) NOT NULL,
  `price` decimal
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `plat` (`id`, `name`, `description`, `price`, `image`) VALUES
    (1, 'Plat n°1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos officiis fuga eligendi. Itaque voluptas, possimus nemo nesciunt laudantium nostrum explicabo non blanditiis similique ad optio tempore qui ipsam quibusdam a.', 12, 'https://img.cuisineaz.com/660x660/2021/02/25/i159373-pizza-margherita.jpeg'),
    (2, 'Plat n°2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos officiis fuga eligendi. Itaque voluptas, possimus nemo nesciunt laudantium nostrum explicabo non blanditiis similique ad optio tempore qui ipsam quibusdam a.', 10, 'https://images.ladepeche.fr/api/v1/images/view/624b1357c58cc402391187d6/large/image.jpg?v=1'),
    (3, 'Plat n°3', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos officiis fuga eligendi. Itaque voluptas, possimus nemo nesciunt laudantium nostrum explicabo non blanditiis similique ad optio tempore qui ipsam quibusdam a.', 9, 'https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_630,q_auto,w_1200/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/tag_photos/original/889/pizza_flickr_4932057475_2a9ce50750_b.jpg');

CREATE TABLE `boisson` (
  `id` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `image` varchar(500) NOT NULL,
  `price` decimal
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `boisson` (`id`, `name`, `price`, `image`) VALUES
  (1, 'Boisson n°1', 5, 'https://www.welcomeoffice.com/WO_Products_Images/xlarge/278485_JPG.jpg' ),
  (2, 'Boisson n°2', 4, 'https://enpafpaf.com/212-large_default/coca-cherry.jpg'),
  (3, 'Boisson n°3', 7, 'https://franprix.twic.pics/product-images/5449000000996_A1C1_s01?twic=v1/contain=600x600');

CREATE TABLE `restaurant_table` (
    `id` int NOT NULL,
    `slot` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `restaurant_table` (`id`, `slot`) VALUES
  (1, 2),
  (2, 2),
  (3, 4),
  (4, 4);

CREATE TABLE `reservation` (
    `id` int NOT NULL,
    `email` varchar(255) NOT NULL,
    `lastName` varchar(255) NOT NULL,
    `firstName` varchar(255) NOT NULL,
    `tel` varchar(255) NOT NULL,
    `status` varchar(255) NOT NULL,
    `nbPoeple` int
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `plat_reservation` (
    `id` int NOT NULL,
    `idPlat` int NOT NULL,
    `idReservation` int NOT NULL,
    `quantity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `boisson_reservation` (
    `id` int NOT NULL,
    `idBoisson` int NOT NULL,
    `idReservation` int NOT NULL,
    `quantity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `table_reservation` (
    `id` int NOT NULL,
    `idTable` int NOT NULL,
    `idReservation` int NOT NULL,
    `startDate` DATETIME NOT NULL,
    `endDate` DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `user`
    ADD PRIMARY KEY (`id`);

ALTER TABLE `boisson`
    ADD PRIMARY KEY (`id`);

ALTER TABLE `plat`
    ADD PRIMARY KEY (`id`);

ALTER TABLE `restaurant_table`
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

ALTER TABLE `restaurant_table`
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
    ADD CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`idReservation`) REFERENCES `reservation` (`id`) ON DELETE CASCADE ;

ALTER TABLE `boisson_reservation`
    ADD CONSTRAINT `boisson_ibfk_1` FOREIGN KEY (`idBoisson`) REFERENCES `boisson` (`id`),
    ADD CONSTRAINT `reservation_ibfk_2` FOREIGN KEY (`idReservation`) REFERENCES `reservation` (`id`) ON DELETE CASCADE ;

ALTER TABLE `table_reservation`
    ADD CONSTRAINT `table_ibfk_1` FOREIGN KEY (`idTable`) REFERENCES `restaurant_table` (`id`),
    ADD CONSTRAINT `reservation_ibfk_3` FOREIGN KEY (`idReservation`) REFERENCES `reservation` (`id`) ON DELETE CASCADE ;