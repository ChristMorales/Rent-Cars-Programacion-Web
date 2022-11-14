class Cliente():
    def __init__(self, dni, nombre, apellido, f_nac, email, contrasenia):
        self.dni = dni
        self.nombre = nombre
        self.apellido = apellido
        self.f_nac = f_nac
        self.email = email
        self.__contrasenia__ = contrasenia

