CREATE SCHEMA database;  
USE database;


CREATE TABLE usuarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL UNIQUE, 
    contrasena VARCHAR(100) NOT NULL,
    fecha DATE NOT NULL,
    dni INT UNSIGNED NOT NULL UNIQUE, 
    perfil_foto TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    id_usuario INT UNSIGNED,
   
);

INSERT INTO usuarios (email, contrasena, fecha, dni, perfil_foto, id_usuario) VALUES  
    ('juanperez@gmail.com', 'clave123', '15-04-1990', 30123456, 'juan.jpg', 1),
    ('anagomez@gmail.com', 'pass456', '22-11-1988', 31234567, 'ana.png', 2),
    ('carlosdiaz@gmail.com', '123carlos', '09-06-1995', 28765432, 'carlos.jpg', 3),
    ('luciaf@gmail.com', 'lucia2023', '01-03-1992', 29543210, 'lucia.jpeg', 4),
    ('martin.lopez@gmail.com', 'ml1234', '12-08-1985', 30345678, 'martin.png', 5);

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

INSERT INTO productos (imagen_archivo, nombre_producto, descripcion, usuario_id) VALUES --para insertar 10 posteos 
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

INSERT INTO comentarios (texto_comentario, id_post, id_usuario) VALUES --para insertar 3 comentarios por cada post
--tengo que hacer 3 comentarios para cada libro que hay (los 20 libros)?




