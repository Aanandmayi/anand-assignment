CREATE SCHEMA `dataTable`;

use `dataTable`;

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `Studentdetail`;

CREATE TABLE `ApiCount` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `values` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ;

CREATE TABLE `Studentdetail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
`totalmarks` int(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ;
