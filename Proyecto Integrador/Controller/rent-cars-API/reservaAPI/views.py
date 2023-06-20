from django.shortcuts import render, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.views import APIView    
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from rest_framework import viewsets
from .serializers import UserSerializer, LocalesSerializer, AutosSerializer, AlquileresSerializer
from .models import CustomUser, Autos, Locales, Alquileres
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.decorators import api_view


class LoginView(ObtainAuthToken):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email', None)
        password = request.data.get('password', None)
        user = authenticate(email=email, password=password)

        if user:
            token, created = Token.objects.get_or_create(user=user)
            serializer = UserSerializer(user)
            return Response({'token': token.key, 'user': serializer.data})
        else:
            return Response({'error': 'Credenciales no validas'}, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    permission_classes = [IsAuthenticated] 
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)
    
class SignupView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = UserSerializer

#ver autos
class verAutos(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    #ver query autos disponibles solamente
    queryset = Autos.objects.all()
    serializer_class = AutosSerializer

@api_view(['GET'])
def get_auto_by_id(request, auto_id):
    try:
        auto = Autos.objects.get(ID_auto=auto_id)
        serializer = AutosSerializer(auto)
        return Response(serializer.data)
    except Autos.DoesNotExist:
        return Response(status=404)



class AutosAlquilados(viewsets.ReadOnlyModelViewSet):
    permission_classes = [IsAdminUser]
    serializer_class = AutosSerializer

    def get_queryset(self):
        return Autos.objects.filter(alquiler_en_curso=True)

class AutosDisponibles(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = AutosSerializer

    def get_queryset(self):
        return Autos.objects.filter(alquiler_en_curso=False)

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
    permission_classes = [IsAdminUser]

    def list(self, request):
        queryset = self.get_queryset()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

        
class procesarAlquiler(APIView):
    def post(self, request):
        #veo si el usuario esta autenticado
        if request.user.is_authenticated:
            ID_cliente = request.user.ID_cliente
        else:
            #Devuelvo error
            return Response({"aviso": "debe loguearse para poder alquilar"})
        #campos del model Alquileres
        alquiler_data = {"fecha_alquiler": request.data.get("fecha_alquiler"),
        "fecha_devolucion": request.data.get("fecha_devolucion"),
        "servicio": request.data.get("servicio"),
        "en_curso": True,
        "ID_cliente": ID_cliente,
        "ID_auto": request.data.get("ID_auto"),
        "ID_local": request.data.get("ID_local")}        
        alquiler = AlquileresSerializer(data=alquiler_data)
        if alquiler.is_valid():
            alquiler.save()
            #aca busco el auto y cambio el campo alquiler_en_curso a True
            autos_id = request.data.get("ID_auto")
            try:
                autos = Autos.objects.get(ID_auto=autos_id)
                autos.alquiler_en_curso = True
                autos.save()
            except Autos.DoesNotExist:
                return Response({"error": "No se encuentra auto."}, status=404)
            return Response(alquiler.data)
        else:
            return Response(alquiler.errors)
        
class cerrarAlquiler(APIView):
    def post(self, request):
        #requiere que se pase como parametro nro nota para cambiar status de nota a cerrado y auto a disponible
        alquiler_id = request.data.get('Nro_nota')
        try:
            alquiler = Alquileres.objects.get(pk=alquiler_id)
            alquiler.en_curso = False
            alquiler.save()
            
            autos_id = alquiler.ID_auto.pk
            autos = Autos.objects.get(pk=autos_id)
            autos.alquiler_en_curso = False
            autos.save()
            
            return Response({"message": "Alquiler finalizado correctamente."})
        except Alquileres.DoesNotExist:
            return Response({"error": "No se encuentra alquiler."}, status=404)
        except Autos.DoesNotExist:
            return Response({"error": "No se encuentra auto."}, status=404)
        
# class ProcessPaymentAPIView(APIView):
#     def post(self, request):
#         try:
#             request_values = json.loads(request.body)
#             payment_data = {
#                 "transaction_amount": float(request_values["transaction_amount"]),
#                 "token": request_values["token"],
#                 "installments": int(request_values["installments"]),
#                 "payment_method_id": request_values["payment_method_id"],
#                 "issuer_id": request_values["issuer_id"],
#                 "payer": {
#                     "email": request_values["payer"]["email"],
#                     "identification": {
#                         "type": request_values["payer"]["identification"]["type"],
#                         "number": request_values["payer"]["identification"]["number"],
#                     },
#                 },
#             }

#             sdk = mercadopago.SDK("")

#             payment_response = sdk.payment().create(payment_data)

#             payment = payment_response["response"]
#             status = {
#                 "id": payment["id"],
#                 "status": payment["status"],
#                 "status_detail": payment["status_detail"],
#             }

#             return Response(data={"body": status, "statusCode": payment_response["status"]}, status=201)
#         except Exception as e:
#             return Response(data={"body": payment_response}, status=400)

class retornarPagado(APIView):  # Retornar custom json 
    def get(self, request):
        return Response({"respuesta": "aprobado"})
    

