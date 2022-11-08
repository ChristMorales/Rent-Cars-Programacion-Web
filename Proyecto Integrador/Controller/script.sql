CREATE DATABASE rent_cars;

USE rent_cars;

CREATE TABLE Clientes (
    ID_cliente int PRIMARY KEY auto_increment,
    Dni int NOT NULL,
    Nombre varchar (50) NOT NULL,
    Apellido varchar (50) NOT NULL,
    Fecha_nac date NOT NULL,
    Email varchar (255) NOT NULL,
    Contrasenia varchar (30) NOT NULL
)


CREATE TABLE Autos (
    ID_auto int PRIMARY KEY auto_increment,
    Patente varchar (10) NOT NULL,
    Marca varchar (20) NOT NULL,
    Modelo varchar (50) NOT NULL,
    Anio varchar (4) NOT NULL,
    FOREIGN KEY Alquiler_en_curso REFERENCES Alquileres (Nro_nota),
    FOREIGN KEY Locale REFERENCES Locales (ID_local)
)

CREATE TABLE Alquileres (
    Nro_nota PRIMARY KEY int auto_increment,
    FOREIGN KEY (Cliente) REFERENCES Clientes (ID_cliente),
    FOREIGN KEY (Autos) REFERENCES Autos (ID_auto),
    Order_date date NOT NULL,
    Fecha_alquiler date,
    Fecha_devolucion date,
    Servicio varchar (255),
    FOREIGN KEY (Locale) REFERENCES Locales (ID_local)
)

CREATE TABLE Locales (
    ID_local PRIMARY KEY auto_increment,
    Nombre_local varchar (255),
    Direccion varchar (255),
)

