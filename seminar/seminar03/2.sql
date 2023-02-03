CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  birth_date DATE NOT NULL
);
INSERT INTO users(name, birth_date) 
VALUES('Pavel', '1980-10-10');
INSERT INTO users(name, birth_date) 
VALUES('Ivan', '1980-12-10');
INSERT INTO users(name, birth_date) 
VALUES('Fione', '1981-10-10');
INSERT INTO users(name, birth_date) 
VALUES('Anka', '1982-12-10');
INSERT INTO users(name, birth_date) 
VALUES('Ivan', '1990-10-10');
INSERT INTO users(name, birth_date) 
VALUES('Maria', '1994-10-31');
INSERT INTO users(name, birth_date) 
VALUES('Maks', '1995-04-18');
INSERT INTO users(name, birth_date) 
VALUES('Aleks', '1995-04-18');

SELECT * FROM users 
WHERE id > 1 and birth_date >= '1981-01-01'
AND name LIKE '%s';