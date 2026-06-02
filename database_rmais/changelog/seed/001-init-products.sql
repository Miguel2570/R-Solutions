--liquibase formatted sql
--changeset migue:2

INSERT INTO products (title, description, category, price) VALUES
('Cashlogy 1500', 'Máquina de gestão de numerário', 'Hardware', 3500.00),
('Zonesoft POS', 'Software de faturação', 'Software', 250.00);