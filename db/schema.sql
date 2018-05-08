DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (

id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured boolean NOT NULL DEFAULT false,
PRIMARY KEY (id)
);



INSERT INTO burgers (burger_name, devoured) VALUES ("hamburger", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("cheeseburger", false);


     
-- select all
SELECT * FROM burgers;

-- insert one
INSERT INTO burgers (burger_name, devoured) VALUES ("bacon burger", false);

-- update one
/*
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
*/
UPDATE burgers SET devoured = true WHERE id = 2;

select * from burgers;

