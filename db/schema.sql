CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
  id Int( 11 ) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(30),
  devoured BOOLEAN,
  date TIMESTAMP
);
