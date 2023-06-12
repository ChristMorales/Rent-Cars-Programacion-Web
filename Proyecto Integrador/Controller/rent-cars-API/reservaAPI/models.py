from django.db import models
from django.contrib.auth.models import AbstractUser
import datetime

class CustomUser(AbstractUser):
    '''extiende de CustomUser'''
    ID_cliente = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=150, unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'password', 'dni', 'nombre', 'apellido', 'fecha_nac']
    dni = models.TextField(max_length=12, blank=False)
    nombre = models.CharField(max_length=100, blank=False)
    apellido = models.CharField(max_length=100, blank=False)
    fecha_nac = models.DateField(blank=True, default=datetime.date.today) # ver parametros
    class Meta:
        db_table = "cliente"
        verbose_name = "Cliente registrado"
        verbose_name_plural= "Clientes registrados"
    def __unicode__(self):
        return self.email
    def __str__(self):
        return self.email

class Locales(models.Model):
    ID_local = models.AutoField(primary_key=True)
    nombre_local = models.CharField(max_length=120, blank=False)
    direccion = models.CharField(max_length=100, blank=False)
    imagen = models.CharField(max_length=250, blank=False)
    class Meta:
        db_table = "Local"
        verbose_name = "Ubicacion geografica de nuestros locales"
        verbose_name_plural= "Locales"
    def __unicode__(self):
        return self.nombre_local
    def __str__(self):  
        return self.nombre_local


class Autos(models.Model):
    ID_auto = models.AutoField(primary_key=True)
    patente = models.CharField(max_length=10, blank=False)
    marca = models.CharField(max_length=20, blank=False)
    modelo = models.CharField(max_length=50, blank=False)
    anio = models.CharField(max_length=4, blank=False)
    alquiler_en_curso = models.BooleanField(default=False)
    ID_local = models.ForeignKey(Locales, to_field="ID_local", on_delete=models.CASCADE)
    imagen = models.CharField(max_length=250, blank=False)
    class Meta:
        db_table = "Auto"
        verbose_name = "Auto disponible para alquiler"
        verbose_name_plural= "autos disponibles"
    def __unicode__(self):
        return self.modelo
    def __str__(self):
        return self.modelo


class Alquileres(models.Model):
    Nro_nota = models.AutoField(primary_key=True)
    ID_cliente = models.ForeignKey(CustomUser, to_field="ID_cliente", on_delete=models.CASCADE)
    ID_auto = models.ForeignKey(Autos, to_field="ID_auto", on_delete=models.CASCADE)
    fecha_alquiler = models.DateField()
    fecha_devolucion = models.DateField()
    servicio = models.CharField(max_length=100, blank=False)
    ID_local = models.ForeignKey(Locales, to_field="ID_local", on_delete=models.CASCADE)
    en_curso = models.BooleanField(default=False)
    class Meta:
        db_table = "Alquiler"
        verbose_name = "Registro de alquileres"
        verbose_name_plural= "Alquileres"
    def __unicode__(self):
        return str(self.Nro_nota)
    def __str__(self):
        return str(self.Nro_nota)
