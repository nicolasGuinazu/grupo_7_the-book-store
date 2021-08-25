-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 25, 2021 at 01:25 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tbs_demo_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `idaddress` int(11) NOT NULL,
  `street` varchar(32) NOT NULL,
  `street_number` int(11) NOT NULL,
  `floor_apartment` tinyint(10) DEFAULT NULL,
  `postal_code` int(11) NOT NULL,
  `town` varchar(20) DEFAULT NULL,
  `city` varchar(64) NOT NULL,
  `province` varchar(20) NOT NULL,
  `country` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`idaddress`, `street`, `street_number`, `floor_apartment`, `postal_code`, `town`, `city`, `province`, `country`) VALUES
(1, 'Mateo Luque', 305, NULL, 5014, NULL, 'Córdoba', 'Córdoba', 'Argentina'),
(2, 'Buenos Aires', 1500, NULL, 5014, NULL, 'Córdoba', 'Córdoba', 'Argentina'),
(3, 'Florida', 340, NULL, 1005, NULL, 'CABA', 'Buenos Aires', 'Argentina'),
(4, 'Congreso de Tucumán', 141, NULL, 4000, NULL, 'San Miguel de Tucumán', 'Tucumán', 'Argentina');

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `idauthor` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `last_name` varchar(32) NOT NULL,
  `nationality` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`idauthor`, `name`, `last_name`, `nationality`) VALUES
(1, 'Haruki', 'Murakami', 'Japón'),
(2, 'Joël', 'Dicker', 'Suiza'),
(3, 'Henning', 'Mankell', 'Suecia'),
(4, 'John', 'Katzenbach', 'Estados Unidos');

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `idcart` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `invoice_id` int(11) NOT NULL,
  `payment_method_id` int(11) NOT NULL,
  `address_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`idcart`, `user_id`, `invoice_id`, `payment_method_id`, `address_id`) VALUES
(1, 1, 2, 1, 3),
(2, 2, 4, 3, 2),
(3, 3, 3, 1, 4),
(4, 4, 1, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `cartsproducts`
--

CREATE TABLE `cartsproducts` (
  `idcartProduct` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cartsproducts`
--

INSERT INTO `cartsproducts` (`idcartProduct`, `product_id`, `cart_id`) VALUES
(1, 1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `editorials`
--

CREATE TABLE `editorials` (
  `ideditorial` int(11) NOT NULL,
  `name` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `editorials`
--

INSERT INTO `editorials` (`ideditorial`, `name`) VALUES
(1, 'ALFAGUARA'),
(2, 'booket'),
(3, 'MAXITUSQUETS'),
(4, 'PAIDÓS'),
(5, 'Planeta'),
(6, 'TUSQUETS'),
(7, 'Siruela'),
(8, 'Ediciones B');

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `idgenre` int(11) NOT NULL,
  `name` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`idgenre`, `name`) VALUES
(1, 'Adm Empresas, Economía'),
(2, 'Arquitectura, Construcción'),
(3, 'Arte, Fotografía'),
(4, 'Ciencias Agropecuarias'),
(5, 'Ciencias Comunicación'),
(6, 'Ciencias Políticas'),
(7, 'Comics'),
(8, 'Crianza, Puericultura'),
(9, 'Deportes'),
(10, 'Desarrollo Personal'),
(11, 'Diccionarios, Idiomas'),
(12, 'Divulgación Científica'),
(13, 'Ecología'),
(14, 'Educación'),
(15, 'Ensayos'),
(16, 'Feminismo, Estudio De Género'),
(17, 'Física, Química, Matemáticas'),
(18, 'Gastronomía, Alimentos'),
(19, 'Historia'),
(20, 'Hobbies'),
(21, 'Humanidades'),
(22, 'Ilustrados Para Adultos'),
(23, 'Infantiles'),
(24, 'Infotmática'),
(25, 'Juveniles'),
(26, 'Literatura'),
(27, 'Mandalas, Libros Para Pintar'),
(28, 'Medicina'),
(29, 'Odontología'),
(30, 'Oficios'),
(31, 'Psicología'),
(32, 'Sociología'),
(33, 'Técnicos'),
(34, 'Veterinaria, Zoología'),
(35, 'Viajes');

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `idinvoice` int(11) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `invoices`
--

INSERT INTO `invoices` (`idinvoice`, `amount`) VALUES
(1, 1500),
(2, 3000),
(3, 3100),
(4, 3350);

-- --------------------------------------------------------

--
-- Table structure for table `paymentmethods`
--

CREATE TABLE `paymentmethods` (
  `idpaymentMethod` int(11) NOT NULL,
  `payment_method` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `paymentmethods`
--

INSERT INTO `paymentmethods` (`idpaymentMethod`, `payment_method`) VALUES
(1, 'Efectivo'),
(2, 'Tranferencia'),
(3, 'Débito'),
(4, 'Crédito');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `idproduct` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `image` varchar(64) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `synopsis` varchar(1000) NOT NULL,
  `format` char(1) NOT NULL,
  `isbn` tinyint(20) NOT NULL,
  `pages` tinyint(5) DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `author_id` int(11) DEFAULT NULL,
  `genre_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`idproduct`, `name`, `image`, `price`, `synopsis`, `format`, `isbn`, `pages`, `release_date`, `author_id`, `genre_id`) VALUES
(1, 'Kafka en la orilla', NULL, '1500.00', 'Kafka Tamura se va de casa el día en que cumple quince años. Los motivos, si es que los hay, son las malas relaciones con su padre -un famoso escultor convencido de que su hijo repetirá el aciago sino del Edipo de la tragedia clásica- y la sensación de vacío producida por la ausencia de su madre y su hermana, que se marcharon también cuando él era muy pequeño.', 'p', 1, NULL, NULL, 1, 26),
(2, 'El libro de los Baltimore', NULL, '1500.00', 'Hasta que tuvo lugar el Drama existían dos ramas de la familia Goldman: los Goldman de Baltimore y los Goldman de Montclair. Los Montclair, de los que forma parte Marcus Goldman, autor de La verdad sobre el caso Harry Quebert, es una familia de clase media que vive en una pequeña casa en el estado de Nueva Jersey. Los Baltimore, prósperos y a los que la suerte siempre ha sonreído, habitan una lujosa mansión en un barrio de la alta sociedad de Baltimore.', 'p', 1, NULL, NULL, 2, 26),
(3, 'La Pirámide', NULL, '1750.00', 'Todo el mundo tiene un pasado. Wallander, como se nos explica en este libro de la serie, se remonta a veinte años atrás, cuando ni siquiera había entrado en Homicidios y era un joven agente despierto, lleno de ambiciones profesionales y con una vida privada que, ya entonces, hacía agua por todas partes. Los cinco relatos incluidos en La pirámide abarcan desde 1969 a 1989, justo antes del comienzo de la primera novela de la serie.', 'p', 12, NULL, NULL, 3, 26),
(4, 'La historia del loco', NULL, '1600.00', 'Su familia lo recluyó en el psiquiátrico tras una conducta imprevisible. Ahora Francis lleva una vida solitaria, pero un reencuentro en los terrenos de la clausurada institución remueve algo profundo en su mente agitada: unos recuerdos sombríos sobre los truculentos hechos que condujeron al cierre del W. S. Hospital, y el asesinato sin resolver de una joven enfermera, cuyo cadáver mutilado fue encontrado una noche después del cierre de las luces. La policía sospechó de un paciente, pero sólo ahora, con la reaparición del asesino, se conocerá la respuesta.', 'p', 123, NULL, NULL, 4, 26),
(7, '', NULL, '0.00', '', '', 0, NULL, NULL, NULL, NULL),
(8, 'Prueba Modify', 'prueba', '0.00', '', '', 0, NULL, NULL, NULL, NULL),
(9, 'Hyperion', NULL, '0.00', '', '', 0, NULL, NULL, NULL, NULL),
(10, 'Hyperion', 'hyp.jpg', '160.00', 'libro peola', 'p', 3, 127, '0000-00-00', NULL, NULL),
(11, 'Hyperion', 'hyp.jpg', '160.00', 'libro peola', 'p', 3, 127, '0000-00-00', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `productseditorials`
--

CREATE TABLE `productseditorials` (
  `idproductEditorial` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `editorial_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `productseditorials`
--

INSERT INTO `productseditorials` (`idproductEditorial`, `product_id`, `editorial_id`) VALUES
(1, 1, 6),
(2, 2, 1),
(3, 3, 7),
(4, 4, 8);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `iduser` int(11) NOT NULL,
  `admin` char(1) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `avatar` varchar(64) DEFAULT NULL,
  `user_name` varchar(64) NOT NULL,
  `name` varchar(32) NOT NULL,
  `last_name` varchar(32) NOT NULL,
  `birth_date` date NOT NULL,
  `phone_number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`iduser`, `admin`, `email`, `password`, `avatar`, `user_name`, `name`, `last_name`, `birth_date`, `phone_number`) VALUES
(1, 'a', 'nico@tbs.com', 'soyNico', NULL, 'Nico', 'Nicolás', 'Guiñazu', '1991-06-05', 1151234567),
(2, 'a', 'marque@tbs.com', 'soyMarque', NULL, 'Marque', 'Marcos', 'Cardozo', '1988-09-15', 1157654123),
(3, 'a', 'pablito@tbs.com', 'soyPablito', NULL, 'Pablito', 'Pablo', 'Camarotta', '1984-09-06', 1155674321),
(4, 'a', 'pia@tbs.com', 'soyPia', NULL, 'Pía', 'María Pía', 'Trebucq', '1987-03-24', 1154352671),
(5, 'a', 'seba@tbs.com', 'soySeba', NULL, 'Seba', 'Sebastián', 'Sultano', '2000-03-11', 1131234567);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`idaddress`);

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`idauthor`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`idcart`),
  ADD KEY `user_id_idx` (`user_id`),
  ADD KEY `invoice_id_idx` (`invoice_id`),
  ADD KEY `payment_method_id_idx` (`payment_method_id`),
  ADD KEY `address_id_idx` (`address_id`);

--
-- Indexes for table `cartsproducts`
--
ALTER TABLE `cartsproducts`
  ADD PRIMARY KEY (`idcartProduct`),
  ADD KEY `product_id_idx` (`product_id`),
  ADD KEY `cart_id_idx` (`cart_id`);

--
-- Indexes for table `editorials`
--
ALTER TABLE `editorials`
  ADD PRIMARY KEY (`ideditorial`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`idgenre`);

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`idinvoice`),
  ADD UNIQUE KEY `idinvoice_UNIQUE` (`idinvoice`);

--
-- Indexes for table `paymentmethods`
--
ALTER TABLE `paymentmethods`
  ADD PRIMARY KEY (`idpaymentMethod`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`idproduct`),
  ADD KEY `id_author_idx` (`author_id`),
  ADD KEY `id_genres_idx` (`genre_id`);

--
-- Indexes for table `productseditorials`
--
ALTER TABLE `productseditorials`
  ADD PRIMARY KEY (`idproductEditorial`),
  ADD KEY `product_id_idx` (`product_id`),
  ADD KEY `editorial_id_idx` (`editorial_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`iduser`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `idaddress` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `idauthor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `idcart` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `cartsproducts`
--
ALTER TABLE `cartsproducts`
  MODIFY `idcartProduct` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `editorials`
--
ALTER TABLE `editorials`
  MODIFY `ideditorial` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `idgenre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `idinvoice` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `paymentmethods`
--
ALTER TABLE `paymentmethods`
  MODIFY `idpaymentMethod` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `idproduct` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `productseditorials`
--
ALTER TABLE `productseditorials`
  MODIFY `idproductEditorial` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `iduser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `address_id` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`idaddress`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `invoice_id` FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`idinvoice`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `payment_method_id` FOREIGN KEY (`payment_method_id`) REFERENCES `paymentmethods` (`idpaymentMethod`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`iduser`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `cartsproducts`
--
ALTER TABLE `cartsproducts`
  ADD CONSTRAINT `cart_id` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`idcart`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`idproduct`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `id_author` FOREIGN KEY (`author_id`) REFERENCES `authors` (`idauthor`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_genres` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`idgenre`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `productseditorials`
--
ALTER TABLE `productseditorials`
  ADD CONSTRAINT `editorial_id` FOREIGN KEY (`editorial_id`) REFERENCES `editorials` (`ideditorial`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`idproduct`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
