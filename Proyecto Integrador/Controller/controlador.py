class Cliente():
    def __init__(self, dni, nombre, apellido, f_nac, email, contraseña):
        self.dni = dni
        self.nombre = nombre
        self.apellido = apellido
        self.f_nac = f_nac
        self.email = email
        self.__contraseña__ = contraseña
