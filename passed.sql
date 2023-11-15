CREATE DATABASE student_result_management;

USE student_result_management;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    roll_number VARCHAR(20) NOT NULL,
    marks INT NOT NULL
);