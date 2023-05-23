import mysql.connector


def cargar_auto(Patente, Marca, Modelo, Anio, Locale):
    try:
        connection=mysql.connector.connect(host='localhost',database='rent_cars',user='root',password='admin')

        mySql_Query = "INSERT INTO Autos (Patente, Marca, Modelo, Anio, Locale) VALUES (%s, %s, %s, %s,%s);"
        record = (Patente, Marca, Modelo, Anio, Locale)
        cursor = connection.cursor()
        cursor.execute(mySql_Query, record)
        connection.commit()
        print("auto creado")
    except mysql.connector.Error as error:
        print("Failed to create table in MySQL: {}".format(error))
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")

def cargar_local(Nombre_local, Direccion):
    try:
        connection=mysql.connector.connect(host='localhost',database='rent_cars',user='root',password='admin')

        mySql_Query = "INSERT INTO Locales (Nombre_local, Direccion) VALUES (%s, %s);"
        record = (Nombre_local, Direccion)
        cursor = connection.cursor()
        cursor.execute(mySql_Query, record)
        connection.commit()
        print("local creado")
    except mysql.connector.Error as error:
        print("Failed to create table in MySQL: {}".format(error))
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")

locales = [("Cordoba", "Aeropuerto Internacional Ing. Ambrosio Taravella"),
    ("Buenos Aires", "Aeropuerto Internacional Ezeiza"),
    ("Rosario", "Aeropuerto Internacional Rosario Islas Malvinas"),
    ("Mendoza", "Aeropuerto Internacional El Plumerillo"),
    ("Bariloche", "Av. Ángel Gallardo 1301")]

autos = [("AB1234", "Toyota", "Corolla", "2022", 1),
("CA5647", "Renault", "Capture", "2021", 2),
("LS4567", "Ford", "Focus", "2020", 2),
("KD7894", "Ford", "Ka", "2016", 3),
("OP1234", "VW", "Golf", "2015", 4)
]


for el in locales:
    cargar_local(el[0], el[1])

for el in autos:
    cargar_auto(el[0], el [1], el[2], el[3], el[4])