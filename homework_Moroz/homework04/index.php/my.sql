CREATE TABLE IF NOT EXISTS classmates (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  address TEXT NOT NULL
);

INSERT INTO classmates(name, age, address) 
VALUES ('Мария Иванова', 29, 'Москва, Тверская, 29-19');
INSERT INTO classmates(name, age, address) 
VALUES ('Анна Петрова', 19, 'СПб, Московская, 18-6');
INSERT INTO classmates(name, age, address) 
VALUES ('Василий Коваленко', 29, 'Минск, Партизанский пр-т, 147-219');
INSERT INTO classmates(name, age, address) 
VALUES ('Максим Дубовский', 25, 'Москва, Маяковского, 26-4');
INSERT INTO classmates(name, age, address) 
VALUES ('Алексей Сапега', 18, 'Москва, Сиреневый б-р, 32-119');
INSERT INTO classmates(name, age, address) 
VALUES ('Юрий Кац', 30, 'Москва, Авангардная, 45-10');
INSERT INTO classmates(name, age, address) 
VALUES ('Мария Кулеш', 17, 'Москва, Радужная, 36-10');
INSERT INTO classmates(name, age, address) 
VALUES ('Дмитрий Дмитраница', 29, 'Рабочая, 47-111, Москва');

SELECT name FROM classmates WHERE  age >= 18 AND age < 30 AND address LIKE'%Москва%';