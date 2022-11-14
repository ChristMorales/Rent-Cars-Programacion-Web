import mysql.connector

def alquilar_auto(cliente, auto, fecha_alquiler, fecha_devolucion, servicio, local):
    try:
        connection=mysql.connector.connect(host='localhost',database='rent_cars',user='root',password='admin')
        mySql_insert_query = '''INSERT INTO Alquileres (Cliente, Autos, Fecha_alquiler, Fecha_devolucion, Servicio, Locale) 
                                VALUES (%s, %s, %s, %s, %s, %s) '''

        cursor = connection.cursor()
        insert_tuple = (cliente, auto, fecha_alquiler, fecha_devolucion, servicio, local)

        cursor.execute(mySql_insert_query, insert_tuple)
        connection.commit()
        print("Reserva creada exitosamente")

    except mysql.connector.Error as error:
        connection.rollback()
        print("Error al crear la reserva {}".format(error))

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")

def obtener_id(patente):

    try:
        connection=mysql.connector.connect(host='localhost',database='rent_cars',user='root',password='admin', buffered = True)

        mySql_query = " SELECT Id_auto FROM Autos WHERE Patente = %s LIMIT 1;"

        
        cursor = connection.cursor()
        cursor.execute(mySql_query, (patente,))
        connection.commit()
 
        rows = cursor.fetchall()
        return rows
    except mysql.connector.Error as error:
        print("Fallo al buscar id patente {}".format(error))

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")
            

def actualizar_alquiler_auto (nro_nota, id_auto):

    try:
        connection=mysql.connector.connect(host='localhost',database='rent_cars',user='root',password='admin')

        mySql_query = "UPDATE Autos SET Alquiler_en_curso = %s WHERE ID_auto = %s;"

        
        cursor = connection.cursor()
        result = (nro_nota, id_auto)
        cursor.execute(mySql_query, result)
        connection.commit()
        print(cursor.rowcount, "registro(s) actualizado") 

    except mysql.connector.Error as error:
        print("Fallo al actualizar alquiler {}".format(error))

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")

#

def obtener_alquiler_auto(id_auto):

    try:
        connection=mysql.connector.connect(host='localhost',database='rent_cars',user='root',password='admin', buffered=True)

        mySql_query = "SELECT Nro_nota FROM Alquileres WHERE ID_auto= %s AND En_curso = TRUE LIMIT 1;"

        
        cursor = connection.cursor()
        cursor.execute(mySql_query, (id_auto,))
        connection.commit()
        rows = cursor.fetchall()

    except mysql.connector.Error as error:
        print("Fallo al buscar alquiler {}".format(error))

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")
            return rows

def obtener_alquiler_cliente(id_cliente):

    try:
        connection=mysql.connector.connect(host='localhost',database='rent_cars',user='root',password='admin', buffered=True)

        mySql_query = "SELECT Nro_nota FROM Alquileres WHERE Cliente = %s AND En_curso = TRUE LIMIT 1;"

        
        cursor = connection.cursor()
        cursor.execute(mySql_query, (id_cliente,))
        connection.commit()
        row = cursor.fetchall()
        return row

    except mysql.connector.Error as error:
        print("Fallo al buscar alquiler {}".format(error))

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")
            

def obtener_auto_alquiler(nro_nota):
    try:
        connection=mysql.connector.connect(host='localhost',database='rent_cars',user='root',password='admin', buffered = True)

        mySql_query = "SELECT Autos FROM Alquileres WHERE Nro_nota = %s AND En_curso = TRUE LIMIT 1;"

        
        cursor = connection.cursor()
        cursor.execute(mySql_query, (nro_nota,))
        connection.commit()
        rows = cursor.fetchall()
    except mysql.connector.Error as error:
        print("Fallo al buscar alquiler {}".format(error))

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")
            return rows

def cerrar_alquiler (nro_nota):

    try:
        connection=mysql.connector.connect(host='localhost',database='rent_cars',user='root',password='admin')

        mySql_query = "UPDATE Alquileres SET En_curso = FALSE WHERE Nro_nota = %s;"

        
        cursor = connection.cursor()
        cursor.execute(mySql_query, (nro_nota,))
        connection.commit()
        print(cursor.rowcount, "registro(s) actualizado") 

    except mysql.connector.Error as error:
        print("Fallo al cerrar alquiler {}".format(error))

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")

def buscar_autos_disponibles ():
    try:
        connection=mysql.connector.connect(host='localhost',database='rent_cars',user='root',password='admin', buffered=True)

        mySql_query = "SELECT * FROM Autos WHERE Alquiler_en_curso = -1;"

        
        cursor = connection.cursor()
        cursor.execute(mySql_query)
        connection.commit()
        rows = cursor.fetchall() 

    except mysql.connector.Error as error:
        print("Fallo al buscar alquiler {}".format(error))

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")
            return rows
            