CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    contrasenia VARCHAR(255) NOT NULL,
    rol VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS noticias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    resumen VARCHAR(350) NOT NULL,
    texto VARCHAR(6000) NOT NULL,
    fecha_publicacion DATE NOT NULL,
    fecha_edicion DATE,
    url_imagen VARCHAR(255),
    slug VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS miembros_equipo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    profesion VARCHAR(255) NOT NULL,
    experiencia VARCHAR(400),
    foto VARCHAR(255),
    estado VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    actividad_economica VARCHAR(255),
    direccion VARCHAR(255) NOT NULL,
    locality VARCHAR(255) NOT NULL,
    telefono VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    logo VARCHAR(255)
);

CREATE TABLE negociacion_colectiva (
  id SERIAL PRIMARY KEY,
  cliente_id INT NOT NULL REFERENCES clientes(id),
  trabajadores_cubiertos INT,
  fecha_negociacion DATE
);
