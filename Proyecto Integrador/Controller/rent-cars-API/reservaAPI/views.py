from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.views import APIView    
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from rest_framework import viewsets
from .serializers import UserSerializer, LocalesSerializer, AutosSerializer, AlquileresSerializer
from .models import CustomUser, Autos, Locales, Alquileres
# Create your views here.

class LoginView(APIView):
    permission_classes = [AllowAny] 
    def post(self, request):
        email = request.data.get('email', None)
        password = request.data.get('password', None)
        user = authenticate(email=email, password=password)
        if user:
            login(request, user)
            return Response(
                UserSerializer(user).data,
                status=status.HTTP_200_OK)
        return Response(
            status=status.HTTP_404_NOT_FOUND)


class LogoutView(APIView):
    permission_classes = [AllowAny] 
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)
    
class SignupView(generics.CreateAPIView):
    serializer_class = UserSerializer

#ver autos
class verAutos(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    #ver query autos disponibles solamente
    queryset = Autos.objects.all()
    serializer_class = AutosSerializer
#ver locales
class verLocales(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    queryset = Locales.objects.all()
    serializer_class = LocalesSerializer
#ver alquileres, admin user solamente
class verAlquileres(viewsets.ReadOnlyModelViewSet):
    permission_classes = [IsAdminUser]
    queryset = Alquileres.objects.all()
    serializer_class = AlquileresSerializer
#agregar autos
class agregarAuto(APIView):
    permission_classes = [IsAdminUser]
    def post(self, request, format=None):
        serializer = AutosSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,
                        status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProfileView(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated] #Solo usuarios logueados pueden ver.
    serializer_class = UserSerializer
    http_method_names = ['get', 'patch']
    def get_object(self):
        if self.request.user.is_authenticated:
            return self.request.user
        
class ListarUsuarios(generics.ListCreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    http_method_names = ['get']
    permission_classes = [IsAdminUser]
    def list(self, request):
        queryset = self.get_queryset()
        serializer = UserSerializer(queryset, many=True)
        if self.request.user.is_authenticated:
            return Response(serializer.data)