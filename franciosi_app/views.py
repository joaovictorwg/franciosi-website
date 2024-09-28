# franciosi_app/views.py
from django.views.generic import View
from django.shortcuts import render
from products.models import Products  # Importa o modelo de outro app

class Home(View):
    def get(self, request):
        products = Products.objects.all()  # Obtém todos os produtos
        return render(request, 'home.html', {'products': products})  # Passa os produtos para home.html
