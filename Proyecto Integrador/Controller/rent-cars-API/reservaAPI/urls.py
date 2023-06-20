from django.urls import path, include
from .views import LoginView, LogoutView, SignupView, ProfileView, ListarUsuarios, agregarAuto, verAutos, verLocales, verAlquileres
from .views import procesarAlquiler, cerrarAlquiler, AutosAlquilados, AutosDisponibles, get_auto_by_id

urlpatterns = [
    path('auth/login/', LoginView.as_view(), name = 'auth_login'),
    path('auth/logout/', LogoutView.as_view(), name = 'auth_logout'),
    path('auth/reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),
    path('auth/registro/', SignupView.as_view(), name='auth_signup'),
    path('user/profile/', ProfileView.as_view(), name='user_profile'),
    path('usuarios/', ListarUsuarios.as_view(), name='listar_usuarios'),
    path('agregarauto/', agregarAuto.as_view(), name='agregar_auto'),
    path('autos/', verAutos.as_view({'get': 'list'}), name='ver_autos'),
    path('autos/alquilados', AutosAlquilados.as_view({'get': 'list'}), name='ver_autos_alquilados'),
    path('autos/disponibles', AutosDisponibles.as_view({'get': 'list'}), name='ver_autos_disponibles'),
    path('locales/', verLocales.as_view({'get': 'list'}), name='ver_locales'),
    path('alquileres/', verAlquileres.as_view({'get': 'list'}), name='ver_alquileres'),
    path('procesaralquiler/', procesarAlquiler.as_view(), name = 'crear_alquiler'),
    path('cerraralquiler/', cerrarAlquiler.as_view(), name='cerrar_alquileres'),
    path('autos/<int:auto_id>/', get_auto_by_id, name='get_auto_by_id'),

]