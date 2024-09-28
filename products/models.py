from django.db import models

from products.consts import *

class Products(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.CharField(max_length=500)
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    foto = models.ImageField(blank=True, null=True, upload_to='products/fotos')
    status = models.SmallIntegerField(choices=OPCAO_STATUS)