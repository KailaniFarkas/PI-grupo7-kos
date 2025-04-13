CREATE SCHEMA registro_usuarios; --creamos la base de datos 
USE registro_usuarios;


CREATE TABLE usuarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL UNIQUE, --no puede haber dos usuarios con el mismo email
    contrasena VARCHAR(100) NOT NULL,
    fecha DATE NOT NULL,
    dni INT UNSIGNED NOT NULL UNIQUE, --no puede haber dos usuarios con el mismo dni
    perfil_foto TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_rol) REFERENCES roles(id)
    id_rol INT UNSIGNED,
);


CREATE TABLE productos (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    imagen_archivo VARCHAR(100) NOT NULL, 
    nombre_producto VARCHAR(100) NOT NULL,
    descripcion TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    usuario_id INT UNSIGNED NOT NULL,
);

CREATE TABLE comentarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    texto_comentario TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_post) REFERENCES productos(id), 
    id_post INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
    id_usuario INT UNSIGNED NOT NULL, 
);


