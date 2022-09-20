DROP DATABASE IF EXISTS limaturismo;
CREATE DATABASE limaturismo;
USE limaturismo;

-- Lugares turisticos
CREATE TABLE lugares (
	id int NOT NULL AUTO_INCREMENT,
	nombre varchar(50) NOT NULL,
	descripcion varchar(1000) NOT NULL,
	ranking int NOT NULL,
	PRIMARY KEY (id)
);

-- Comentarios
CREATE TABLE comentarios (
	id int NOT NULL AUTO_INCREMENT,
	lugar_id int NOT NULL,
	name_user varchar(50) NOT NULL,
	lname_user varchar(50) NOT NULL,
	coments_user varchar(255),
	points_obtained int NOT NULL,
	time_comment DATETIME NOT NULL,
    PRIMARY KEY (id, lugar_id),
	FOREIGN KEY (lugar_id) REFERENCES lugares (id)
);

-- Trivias
CREATE TABLE trivias (
	id int NOT NULL AUTO_INCREMENT,
	lugar_id int NOT NULL,
	PRIMARY KEY (id, lugar_id),
	FOREIGN KEY (lugar_id) REFERENCES lugares (id)
);

-- Preguntas
CREATE TABLE preguntas (
	id int NOT NULL AUTO_INCREMENT,
	lugar_id int NOT NULL,
	trivia_id int NOT NULL,
	pregunta varchar(255) NOT NULL,
	PRIMARY KEY (id, lugar_id, trivia_id),
	FOREIGN KEY (trivia_id, lugar_id) REFERENCES trivias (id, lugar_id)
);

-- Respuestas
CREATE TABLE respuestas (
	id int NOT NULL AUTO_INCREMENT,
	lugar_id int NOT NULL,
	trivia_id int NOT NULL,
	pregunta_id int NOT NULL,
	respuesta varchar(255) NOT NULL,
	correcta BOOLEAN NOT NULL,
	PRIMARY KEY (id, lugar_id, trivia_id, pregunta_id),
	FOREIGN KEY (pregunta_id, lugar_id, trivia_id) REFERENCES preguntas(id, lugar_id, trivia_id)
);

-- AÑADIR LUGARES
INSERT INTO lugares (nombre, descripcion, ranking)
	VALUES ('Museo Larco', 'MMMMMM', 10),
	('Islas Palomino', 'IIIIII', 9),
	('Plaza de Armas de Lima', 'PPPPP', 9);

-- AÑADIR COMENTARIOS
INSERT INTO comentarios(lugar_id, name_user, lname_user,coments_user, points_obtained, time_comment) 
	VALUES (1, 'Wanly', 'Obregon', 'Me parece muy buena la interfaz', 10, now()),
	(1, 'Luis', 'Izaguirre', 'Interesante pero le falta mas animacion', 8, now()),
	(1, 'Valerie', 'Ore', 'Estuvo muy lindo woow!!', 10, now()),
	(1, 'Pedro', 'Rodriguez', 'Hicieron lo que pudieron xd', 2, now());

-- AÑADIR TRIVIAS
INSERT INTO trivias (lugar_id)
	VALUES (1);

-- AÑADIR PREGUNTAS
INSERT INTO preguntas (lugar_id, trivia_id, pregunta)
	VALUES (1, 1, '¿Cuál es el nombre del lugar turistico?');

-- AÑADIR RESPUESTAS
INSERT INTO respuestas (lugar_id, trivia_id, pregunta_id, respuesta, correcta)
	VALUES (1, 1, 1, 'Museo Larco', true),
	(1, 1, 1, 'Wikipedia', false);



-- INSTRUCTIONS TO CHECK IF TABLES HAVE THE CORRECT CONSTRAINTS
/*
select COLUMN_NAME, CONSTRAINT_NAME, REFERENCED_COLUMN_NAME, REFERENCED_TABLE_NAME
 from information_schema.KEY_COLUMN_USAGE
where TABLE_NAME = 'comentarios';
*/
/*
select COLUMN_NAME, CONSTRAINT_NAME, REFERENCED_COLUMN_NAME, REFERENCED_TABLE_NAME
 from information_schema.KEY_COLUMN_USAGE
where TABLE_NAME = 'trivias';
*/
/*
select COLUMN_NAME, CONSTRAINT_NAME, REFERENCED_COLUMN_NAME, REFERENCED_TABLE_NAME
 from information_schema.KEY_COLUMN_USAGE
where TABLE_NAME = 'preguntas';
*/
/*
select COLUMN_NAME, CONSTRAINT_NAME, REFERENCED_COLUMN_NAME, REFERENCED_TABLE_NAME
 from information_schema.KEY_COLUMN_USAGE
where TABLE_NAME = 'respuestas';
*/