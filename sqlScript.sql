CREATE SCHEMA `hw79_extra` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE `hw79_extra`.`Categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `Description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `hw79_extra`.`Places` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `Description` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `hw79_extra`.`Items` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `Category_fk` INT NOT NULL,
  `Place_fk` INT NOT NULL,
  `Description` VARCHAR(255) NULL,
  `image` VARCHAR(100) NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `hw79_extra`.`Items`
ADD CONSTRAINT `category_id_fk`
  FOREIGN KEY (`Category_fk`)
  REFERENCES `hw79_extra`.`Categories` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `hw79_extra`.`Items`
ADD CONSTRAINT `place_id_fk`
  FOREIGN KEY (`Place_fk`)
  REFERENCES `hw79_extra`.`Places` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

INSERT INTO `Places` (`Name`, `Description`)
VALUES
	('Кабинет директора', '3-й этаж, 303-каб'),
	('Учительская', '2-й этаж, 207-каб'),
	('Офис №1', '1-й этаж, 101-каб')

INSERT INTO `Categories` (`Name`, `Description`)
VALUES
	('Мебель', 'Мягкая, корпусная'),
	('Компьютерное оборудование', 'Все, что касается компьютера'),
	('Бытовая техника', 'Электро-оборудование, кроме компьютерного')

INSERT INTO `Items` (`id`, `Name`, `Category_fk`, `Place_fk`, `Description`, `image`)
  VALUES
  	(1, 'золотой стул', 1, 1, '1 штука', 'http://fontan-humor-odessa.com/images/site-elements/znak-gambs-large.png'),
  	(2, 'ноутбук', 2, 2, '3 штука', 'http://pomoshkomp.ru/wp-content/uploads/2014/08/324.jpg'),
  	(3, 'микроволновка', 3, 3, '2 штука', 'http://vybortech.ru/wp-content/uploads/2015/07/1680_0.jpg')