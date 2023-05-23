from django.contrib import admin
from .models import Clientes, Locales, Autos, Alquileres


class ClientesAdmin(admin.ModelAdmin):
    list_display = ["ID_cliente", "dni", "nombre", "apellido", "fecha_nac", "email"]
class LocalesAdmin(admin.ModelAdmin):
    list_display = ["ID_local", "nombre_local", "direccion"]
class AutosAdmin(admin.ModelAdmin):
    list_display = ["ID_auto", "patente", "marca", "modelo", "anio", "alquiler_en_curso", "ID_local"]
class AlquileresAdmin(admin.ModelAdmin):
    list_display = ["Nro_nota", "ID_cliente", "ID_auto", "fecha_alquiler", "fecha_devolucion", "servicio", "ID_local", "en_curso"]

admin.site.register(Clientes, ClientesAdmin)
admin.site.register(Locales, LocalesAdmin)
admin.site.register(Autos, AutosAdmin)
admin.site.register(Alquileres, AlquileresAdmin)