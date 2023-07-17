from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ToDoSerializer
from .models import ToDo
from rest_framework.response import Response

# Create your views here.
class ToDoView(viewsets.ModelViewSet):
    serializer_class=ToDoSerializer
    queryset=ToDo.objects.all()
        