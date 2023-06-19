from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Locales, Autos, Alquileres
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(min_length=8)
    is_admin = serializers.SerializerMethodField()
    def get_is_admin(self, obj):
        return obj.is_staff
    class Meta:
        model = get_user_model()
        fields = ('email', 'username', 'password', 'dni', 'nombre', 'apellido', 'fecha_nac', 'is_admin')
    def validate_password(self, value):
        return make_password(value)

class LocalesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Locales
        fields = '__all__'

class AutosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Autos
        #checar fields y si alquilado
        fields = '__all__'

class AlquileresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alquileres
        #checar fields y si en curso
        fields = '__all__'
