CREATE DATABASE rent_cars_web;

USE rent_cars_web;

CREATE TABLE Clientes (
    ID_cliente int PRIMARY KEY auto_increment,
    Dni int NOT NULL,
    Nombre varchar (50) NOT NULL,
    Apellido varchar (50) NOT NULL,
    Fecha_nac date NOT NULL,
    Email varchar (255) NOT NULL,
    Contrasenia varchar (30) NOT NULL
);

CREATE TABLE Locales (
    ID_local int PRIMARY KEY auto_increment,
    Nombre_local varchar (255),
    Direccion varchar (255)
);

CREATE TABLE Autos (
    ID_auto int PRIMARY KEY auto_increment,
    Patente varchar (10) NOT NULL,
    Marca varchar (20) NOT NULL,
    Modelo varchar (50) NOT NULL,
    Anio varchar (4) NOT NULL,
    Alquiler_en_curso int DEFAULT -1,
    Locale int,
    FOREIGN KEY (Locale) REFERENCES Locales (ID_local)
);


CREATE TABLE Alquileres (
    Nro_nota int PRIMARY KEY auto_increment,
    Cliente int,
    FOREIGN KEY (Cliente) REFERENCES Clientes (ID_cliente),
    Autos int,
    FOREIGN KEY (Autos) REFERENCES Autos (ID_auto),
    Fecha_alquiler date,
    Fecha_devolucion date,
    Servicio varchar (255),
    Locale int,
    FOREIGN KEY (Locale) REFERENCES Locales (ID_local)
    En_curso boolean DEFAULT TRUE
);

