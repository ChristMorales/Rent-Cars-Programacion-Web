import abm_usuarios as abm
import alquilar_autos as alquilar
import mysql.connector


class Cliente():
    def __init__(self, dni, nombre, apellido, f_nac, email, contrasenia):
        self.dni = dni
        self.nombre = nombre
        self.apellido = apellido
        self.f_nac = f_nac
        self.email = email
        self.contrasenia = contrasenia

    def get_id (self):
        return abm.obtener_id(self.dni)

    def alta (self):
        abm.crear_usuario(self.dni, self.nombre, self.apellido, self.f_nac, self.email, self.contrasenia)

    def baja (self):
        abm.eliminar_usuario(self.dni)

    def cambiar_contrasenia (self, nueva_contrasenia):
        abm.cambiar_contraseña(self.dni, nueva_contrasenia)

    def alquilar_auto(self, autos, fecha_alquiler, fecha_devolucion, servicio, local):
        alquilar.alquilar_auto(self.get_id(), autos, fecha_alquiler, fecha_devolucion, servicio, local)

    

class Autos():
    def __init__(self, patente, marca, modelo, anio, locale):
        self.patente = patente
        self.marca = marca
        self.modelo = modelo
        self.anio = anio
        self.locale = locale

    def get_id (self):
        alquilar.obtener_id (self.patente)

    #def alquiler_en_curso (self):


cliente = Cliente(32426963, 'Christopher', 'Morales', "1987/03/22", 'cancheritos.me@gmail.com', 'admin')

cliente.baja()

