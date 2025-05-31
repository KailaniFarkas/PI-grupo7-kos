CREATE SCHEMA databasepi;  
USE databasepi;


CREATE TABLE usuarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL UNIQUE, 
    contrasena VARCHAR(100) NOT NULL,
    fecha DATE NOT NULL, 
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    username VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO usuarios (email, contrasena, fecha, username) VALUES 
('lucia@gmail.com', 'clave1234', '2002-05-15', 'lucia_01'),
('martin@gmail.com', 'martin2024', '2001-11-20', 'martin98'),
('sofia@gmail.com', 'sofiaSecure!', '2004-07-03', 'sofia_202'),
('juan@gmail.com', 'juanPass09', '2003-03-30', 'juanito95'),
('carla@gmail.com', 'carlaClave!', '2005-09-18', 'carla_dev');


CREATE TABLE productos (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    imagen_archivo VARCHAR(100) NOT NULL, 
    nombre_producto VARCHAR(100) NOT NULL,
    descripcion TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    usuario_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

INSERT INTO productos (imagen_archivo, nombre_producto, descripcion, usuario_id) VALUES 
    ('1948.png', '1948', 'Narrativa ágil con personajes inolvidables', 1),
    ('asesinato en el orient express.png', 'Asesinato en el orient express', 'Una historia atrapante que mezcla misterio y romance', 3),
    ('cien años de soledad.png', 'Cien años de soledad', 'Ideal para quienes buscan reflexión y crecimiento personal', 4),
    ('crimen y castigo.png', 'Crimen y castigo', 'Suspenso psicológico que no te dejará soltarlo', 5),
    ('el codigo da vinci.png', 'El codigo da vinci', 'Una aventura épica a través de mundos fantásticos', 2),
    ('el extranjero.png', 'El extranjero', 'Relatos breves cargados de emoción y profundidad', 3),
    ('el relato de dorian gray.png', 'El relato de dorian gray', 'Perfecto para los fanáticos del thriller político', 1),
    ('emma.png', 'Emma', 'Una guía práctica para mejorar tu día a día', 3),
    ('jane eyre.png', 'Jane Eyre', 'Humor inteligente con crítica social', 4),
    ('romeo y julieta.png', 'Romeo y Julieta', 'Un clasico de la literatura infantil', 5);

CREATE TABLE comentarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    texto_comentario TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    id_post INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_post) REFERENCES productos(id), 
    id_usuario INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

INSERT INTO comentarios (texto_comentario, id_post, id_usuario) VALUES
('Muy buena historia, atrapante', 1, 2),
('Muy bien escrito', 1, 3),
('Es mi favorito de momento', 1, 4),
('Un clasico imperdible', 2, 1),
('Muy intrigante', 2, 5),
('Muy bueno mantenerse entretenido', 2, 4),
('Atrapante hasta el final', 3, 2),
('Narrativa poetica y atrapante', 3, 3),
('Lectura dificil', 3, 1),
('Lectura muy complicada', 4, 5),
('Libro para cualquier tipo de edad', 4, 3),
('Te hace quedarte pensando todo el tiempo en el libro', 4, 2),
('Historia para todo tipo de edades', 5, 1),
('Hay que tener un buen ritmo para poder seguirlo', 5, 4),
('Lo termine en menos de una tarde, encantador', 5, 5),
('Libro muy corto, no me gusto', 6, 2),
('Palabras muy complicadas para una primera lectura', 6, 3),
('Un estilo muy especial para leer', 6, 1),
('Atrapante hasta el final', 7, 4),
('Una portada impactante', 7, 2),
('Personajes muy interesantes', 7, 5),
('Muy divertido', 8, 1),
('La ciencia ficcion de este libro es muy atrapante', 8, 3),
('Para leer a cualquier tipo de edad', 8, 4),
('Emocionante trama', 9, 5),
('Presencia de personajes impactantes', 9, 2),
('Me gusto mucho', 9, 3),
('Clasico imperdible', 10, 1),
('Hermoso y muy bueno para leer con niños', 10, 4),
('Lo lei para el colegio y no me arrepiento', 10, 5);







