"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from todo import views

router=routers.DefaultRouter()
# r->raw
router.register(r'todo',views.ToDoView,basename='toDo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include(router.urls)),
]

# A serializer is a class in Django REST Framework that provides a way to convert complex data, 
# such as Django model instances, into a representation (e.g., JSON) that can be easily rendered or parsed.
#  It also provides deserialization, 
# allowing parsed data to be converted back into complex types, after first validating the incoming data.
# Serializers define the fields and their types that should be included when representing the data. 
# They handle converting data to and from formats like JSON, XML, or other content types.
# Serializers are commonly used in Django REST Framework to handle data serialization and 
# deserialization in API views and viewsets.

# A router in Django REST Framework is a class that helps in automatically generating the URL patterns for
#  the API views or viewsets. It simplifies the process of defining the URLs and connecting them with the
#  appropriate views.
# Routers provide a way to handle the different HTTP methods (GET, POST, PUT, DELETE, etc.) for different 
# endpoints of the API.
# By using a router, you can easily map API views or viewsets to their corresponding 
# URLs without manually defining each URL pattern.

# ViewSet:

# A viewset is a class in Django REST Framework that combines the functionality of multiple views into a 
# single class. It provides an interface to perform CRUD (Create, Retrieve, Update, Delete) operations on 
# a model or a set of models.
# Viewsets typically correspond to database models and define the actions that can be performed on them 
# (e.g., create, retrieve, update, delete).
# Django REST Framework provides different types of viewsets, such as ModelViewSet, 
# ReadOnlyModelViewSet, GenericViewSet, etc., which come with pre-defined methods for handling 
# various HTTP methods.
# In the code snippet you provided:

# The serializer_class attribute is set to ToDoSerializer, 
# indicating that a specific serializer class (ToDoSerializer) should be used to serialize 
# and deserialize ToDo objects.
# The queryset attribute is set to ToDo.objects.all(), defining the initial queryset for the 
# viewset. It retrieves all instances of the ToDo model from the database.
# The class ToDoView is likely registered with a router to generate the URL patterns automatically 
# for the viewset.
# By combining the serializer, router, and viewset, you can create a powerful and flexible API 
# that handles serialization, deserialization, URL routing, and CRUD operations for the ToDo model.

