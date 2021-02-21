DROP DATABASE IF EXISTS education360;
CREATE DATABASE education360;
USE education360;

CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(250),
    description VARCHAR(250),
    author VARCHAR(250),
    date_create VARCHAR(250)
);

INSERT INTO posts (title, description, author)
VALUES  ("Primer Post", "Esto es una prueba", "Johan Castillo"),
        ("Primer Post", "Esto es una prueba", "Johan Castillo");

SELECT * FROM posts;

