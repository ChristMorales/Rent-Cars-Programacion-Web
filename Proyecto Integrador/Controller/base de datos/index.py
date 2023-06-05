import controlador as cont
import abm_usuarios as abm
import alquilar_autos as alquilar



# Crear cliente y borrarlo
cliente = cont.Cliente(32426963, 'Christopher', 'Morales', "1987/03/22", 'cancheritos.me@gmail.com', 'admin')
cliente.alta()
cliente.baja()

# Crear otro cliente
cliente2 = cont.Cliente(336292138, "Maria", "Anders", "1988/09/18", 'marianders@gmail.com', '123456789')
cliente2.alta()

#consultar autos disponibles
lista_autos_disponibles = cont.consultar_autos_disponibles(1)

auto_seleccionado = lista_autos_disponibles[1]
id_auto = auto_seleccionado.get_id()
cliente2.alquilar_auto(id_auto, 11/15/22, 11/20/22, "sin chofer", 1 )

cont.consultar_autos_disponibles(2)

cliente2.devolver_auto()

cont.consultar_autos_disponibles(3)