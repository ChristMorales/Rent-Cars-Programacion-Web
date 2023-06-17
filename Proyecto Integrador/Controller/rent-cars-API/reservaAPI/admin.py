from django.contrib import admin
from django.contrib.auth import get_user_model
from .models import Locales, Autos, Alquileres
from django.contrib.auth.admin import UserAdmin


class LocalesAdmin(admin.ModelAdmin):
    list_display = ["ID_local", "nombre_local", "direccion"]
class AutosAdmin(admin.ModelAdmin):
    list_display = ["ID_auto", "patente", "marca", "modelo", "anio", "precioPorDia", "alquiler_en_curso", "ID_local"]
class AlquileresAdmin(admin.ModelAdmin):
    list_display = ["Nro_nota", "ID_cliente", "ID_auto", "fecha_alquiler", "fecha_devolucion", "servicio", "ID_local", "en_curso"]

""" class CustomUser(AbstractUser):
    '''extiende de CustomUser'''
    ID_cliente = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=150, unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'password']
    dni = models.TextField(max_length=12, blank=False)
    nombre = models.CharField(max_length=100, blank=False)
    apellido = models.CharField(max_length=100, blank=False)
    fecha_nac = models.DateField(blank=False) # ver parametros """

admin.site.register(Locales, LocalesAdmin)
admin.site.register(Autos, AutosAdmin)
admin.site.register(Alquileres, AlquileresAdmin)
@admin.register(get_user_model())
class CustomUserAdmin(UserAdmin):
    pass