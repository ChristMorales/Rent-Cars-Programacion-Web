import abm_usuarios as abm
import alquilar_autos as alquilar


class Cliente():
    def __init__(self, dni, nombre, apellido, f_nac, email, contrasenia):
        self.dni = dni
        self.nombre = nombre
        self.apellido = apellido
        self.f_nac = f_nac
        self.email = email
        self.contrasenia = contrasenia

    def get_id (self):
        id = abm.obtener_id(self.dni)
        return id[0][0]

    def get_alquiler(self):
        id = self.get_id()
        alquiler = alquilar.obtener_alquiler_cliente(id)
        return alquiler[0][0]
        

    def alta (self):
        abm.crear_usuario(self.dni, self.nombre, self.apellido, self.f_nac, self.email, self.contrasenia)

    def baja (self):
        abm.eliminar_usuario(self.dni)

    def cambiar_contrasenia (self, nueva_contrasenia):
        id = self.get_id
        abm.cambiar_contraseña(id, nueva_contrasenia)

    def alquilar_auto(self, autos, fecha_alquiler, fecha_devolucion, servicio, local):
        id = self.get_id()
        alquilar.alquilar_auto(id, autos, fecha_alquiler, fecha_devolucion, servicio, local)
        alquiler = self.get_alquiler()
        alquilar.actualizar_alquiler_auto(alquiler, autos)


    def devolver_auto(self):
        id = self.get_id()
        nro_alquiler = alquilar.obtener_alquiler_cliente(id)
        auto =  alquilar.obtener_auto_alquiler(nro_alquiler[0][0])
        alquilar.actualizar_alquiler_auto(-1, auto[0][0])
        alquilar.cerrar_alquiler(nro_alquiler[0][0])  


    

class Autos():
    def __init__(self, patente, marca, modelo, anio, locale):
        self.patente = patente
        self.marca = marca
        self.modelo = modelo
        self.anio = anio
        self.locale = locale

    def get_id (self):
        id = alquilar.obtener_id (self.patente)
        return id[0][0]

    def alquiler_en_curso (self): 
        if alquilar.obtener_alquiler_auto > 0:
            return alquilar.obtener_alquiler_auto
        else:
            return False

    def __str__(self):
        return f"{self.marca} {self.modelo}, año {self.anio}, patente {self.patente}"

def consultar_autos_disponibles(int):
    consulta_autos_disponibles = alquilar.buscar_autos_disponibles()
    autos_disponibles = []
    for auto in consulta_autos_disponibles:
        auto_nuevo = Autos(auto[1], auto[2], auto[3], auto[4], auto[5])
        autos_disponibles.append(auto_nuevo)

    for auto in autos_disponibles:
        print(f"Consulta N° {int} {auto}")
    return autos_disponibles





