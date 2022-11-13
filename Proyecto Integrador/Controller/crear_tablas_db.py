import mysql.connector
from mysql.connector import Error


#Test de conexion

try:
	connection=mysql.connector.connect(host='localhost',database='rent_cars',user='root',password='admin')
	if connection.is_connected():
			db_Info=connection.get_server_info()
			print("Connected to MySQL Server version", db_Info)
			cursor=connection.cursor()
			cursor.execute("select database();")
			record=cursor.fetchone()
			print("You're connected to database: ", record)
except Error as e:
	print ("Error while connecting to MySQL", e)
finally:
	if connection.is_connected():
		cursor.close()
		connection.close()
		print("MySQL connection is closed")

# Creando tablas
# Tabla clientes
try:
    connection=mysql.connector.connect(host='localhost',database='rent_cars',user='root',password='admin')

    mySql_Create_Table_Query = '''CREATE TABLE Clientes (
                                    ID_cliente int PRIMARY KEY auto_increment,
                                    Dni int NOT NULL,
                                    Nombre varchar (50) NOT NULL,
                                    Apellido varchar (50) NOT NULL,
                                    Fecha_nac date NOT NULL,
                                    Email varchar (255) NOT NULL,
                                    Contrasenia varchar (30) NOT NULL
                                )
                                '''

    cursor = connection.cursor()
    result = cursor.execute(mySql_Create_Table_Query)
    print("tabla productos clientes creada ok")
except mysql.connector.Error as error:
    print("Failed to create table in MySQL: {}".format(error))
finally:
    if connection.is_connected():
        cursor.close()
        connection.close()
        print("MySQL connection is closed")

#Tabla Autos
try:
    connection=mysql.connector.connect(host='localhost',database='rent_cars',user='root',password='admin')

    mySql_Create_Table_Query = '''
                                    CREATE TABLE Autos (
                                    ID_auto int PRIMARY KEY auto_increment,
                                    Patente varchar (10) NOT NULL,
                                    Marca varchar (20) NOT NULL,
                                    Modelo varchar (50) NOT NULL,
                                    Anio varchar (4) NOT NULL,
                                    FOREIGN KEY Alquiler_en_curso REFERENCES Alquileres (Nro_nota),
                                    FOREIGN KEY Locale REFERENCES Locales (ID_local)
                                )
                                '''

    cursor = connection.cursor()
    result = cursor.execute(mySql_Create_Table_Query)
    print("tabla productos autos creada ok")
except mysql.connector.Error as error:
    print("Failed to create table in MySQL: {}".format(error))
finally:
    if connection.is_connected():
        cursor.close()
        connection.close()
        print("MySQL connection is closed")

#Tabla Alquileres
try:
    connection=mysql.connector.connect(host='localhost',database='rent_cars',user='root',password='admin')

    mySql_Create_Table_Query = '''
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
                                '''

    cursor = connection.cursor()
    result = cursor.execute(mySql_Create_Table_Query)
    print("tabla productos alquileres creada ok")
except mysql.connector.Error as error:
    print("Failed to create table in MySQL: {}".format(error))
finally:
    if connection.is_connected():
        cursor.close()
        connection.close()
        print("MySQL connection is closed")

#Tabla Locales
try:
    connection=mysql.connector.connect(host='localhost',database='rent_cars',user='root',password='admin')

    mySql_Create_Table_Query = '''
                                    CREATE TABLE Locales (
                                    ID_local PRIMARY KEY auto_increment,
                                    Nombre_local varchar (255),
                                    Direccion varchar (255),
                                )
                                '''

    cursor = connection.cursor()
    result = cursor.execute(mySql_Create_Table_Query)
    print("tabla productos alquileres creada ok")
except mysql.connector.Error as error:
    print("Failed to create table in MySQL: {}".format(error))
finally:
    if connection.is_connected():
        cursor.close()
        connection.close()
        print("MySQL connection is closed")