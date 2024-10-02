from django.views.generic import ListView
from products.models import Products
from django.shortcuts import render

# Create your views here.
class ListProducts(ListView):
    # Views para listar produtos cadastrados
    model = Products
    context_object_name = 'products'
    template_name = 'components/list.html'


