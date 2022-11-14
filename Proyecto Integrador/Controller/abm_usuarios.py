import mysql.connector

#Crear usuario, insertar datos en tabla
def crear_usuario(dni, nombre, apellido, fecha_nac, email, contrasenia):
    try:
        connection=mysql.connector.connect(host='localhost',database='rent_cars',user='root',password='admin')
        cursor = connection.cursor()
        mySql_insert_query = '''INSERT INTO Clientes (Dni, Nombre, Apellido, Fecha_nac, Email, Contrasenia)
                                VALUES (%s, %s, %s, %s, %s, %s) '''

        record = (dni, nombre, apellido, fecha_nac, email, contrasenia)
        cursor.execute(mySql_insert_query, record)
        connection.commit()
        print("Cliente creado correctamente")

    except mysql.connector.Error as error:
        print("Fallo al crear cliente {}".format(error))

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")

def eliminar_usuario(dni):
    try:
        connection=mysql.connector.connect(host='localhost',database='rent_cars',user='root',password='admin')

        mySql_insert_query = "DELETE FROM Clientes WHERE Dni = %s;"         
        cursor = connection.cursor()
        cursor.execute(mySql_insert_query, (dni,))
        connection.commit()
        print(cursor.rowcount, "Cliente borrado") 

    except mysql.connector.Error as error:
        print("Fallo al borrar cliente{}".format(error))

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")

def cambiar_contraseña(contrasenia, id):

    try:
        connection=mysql.connector.connect(host='localhost',database='rent_cars',user='root',password='admin')

        mySql_insert_query = " UPDATE Clientes SET Contrasenia = %s WHERE ID_cliente = %s;"

        
        cursor = connection.cursor()
        result = (contrasenia, id)
        cursor.execute(mySql_insert_query, result[0], result[1])
        connection.commit()
        print(cursor.rowcount, "Contraseña modificada") 

    except mysql.connector.Error as error:
        print("Fallo al modificar contraseña {}".format(error))

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")

def obtener_id(dni):

    try:
        connection=mysql.connector.connect(host='localhost',database='rent_cars',user='root',password='admin', buffered = True)

        mySql_query = " SELECT Id_cliente FROM Clientes WHERE Dni = %s LIMIT 1;"

        
        cursor = connection.cursor()
        cursor.execute(mySql_query, (dni,))
        connection.commit()
        rows=cursor.fetchall()
        return rows

    except mysql.connector.Error as error:
        print("Fallo al buscar id {}".format(error))

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")

