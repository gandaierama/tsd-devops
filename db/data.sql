CREATE DATABASE IF NOT EXISTS `users`;
USE `users`;


ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'test';


-- Rest of queries
DROP TABLE IF EXISTS `x`;
CREATE TABLE `x` (..)
LOCK TABLES `x` WRITE;
INSERT INTO `x` VALUES ...;