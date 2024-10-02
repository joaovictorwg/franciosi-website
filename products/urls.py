from django.contrib import admin
from django.urls import path

from products.views import *

urlpatterns = [
   path('', ListProducts.as_view(), name='product_list'), 
   path('/sobre', ListProducts.as_view(), name='sobre-nos'), 
]

