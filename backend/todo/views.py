from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ToDoSerializer
from .models import ToDo
from rest_framework.response import Response

# Create your views here.
class ToDoView(viewsets.ModelViewSet):
    serializer_class=ToDoSerializer
    queryset=ToDo.objects.all()
    # print(queryset)
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    