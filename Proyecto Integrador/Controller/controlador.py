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
        return abm.obtener_id(self.dni)

    def get_alquiler(self):
        alquilar.obtener_alquiler_cliente(self.get_id)

    def alta (self):
        abm.crear_usuario(self.dni, self.nombre, self.apellido, self.f_nac, self.email, self.contrasenia)

    def baja (self):
        abm.eliminar_usuario(self.dni)

    def cambiar_contrasenia (self, nueva_contrasenia):
        abm.cambiar_contraseña(self.dni, nueva_contrasenia)

    def alquilar_auto(self, autos, fecha_alquiler, fecha_devolucion, servicio, local):
        alquilar.alquilar_auto(self.get_id(), autos, fecha_alquiler, fecha_devolucion, servicio, local)
        alquilar.actualizar_alquiler_auto(autos, self.get_alquiler)


    def devolver_auto(self):
        nro_alquiler = alquilar.obtener_alquiler_cliente(self.get_id)
        auto =  alquilar.obtener_auto_alquiler(nro_alquiler)
        alquilar.actualizar_alquiler_auto(auto, -1)
        alquilar.cerrar_alquiler(nro_alquiler)      

    

class Autos():
    def __init__(self, patente, marca, modelo, anio, locale):
        self.patente = patente
        self.marca = marca
        self.modelo = modelo
        self.anio = anio
        self.locale = locale

    def get_id (self):
        alquilar.obtener_id (self.patente)

    def alquiler_en_curso (self): 
        if alquilar.obtener_alquiler_auto > 0:
            return alquilar.obtener_alquiler_auto
        else:
            return False



cliente = Cliente(32426963, 'Christopher', 'Morales', "1987/03/22", 'cancheritos.me@gmail.com', 'admin')

cliente.alta()
cliente.baja()

cliente2 = Cliente(336292138, "Maria", "Anders", "1988/09/18", 'marianders@gmail.com', '123456789')
cliente2.alta()

#autos_disponibles = alquilar.buscar_autos_disponibles()
#for i in range (autos_disponibles.length):



