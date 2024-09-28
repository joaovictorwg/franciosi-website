from django.contrib import admin
from products.models import Products

class ProductsAdmin(admin.ModelAdmin):
    list_display = ['id', 'nome', 'descricao', 'preco', 'foto', 'status']
    search_fields = ['modelo']

admin.site.register(Products, ProductsAdmin)
