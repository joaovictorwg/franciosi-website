from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include

from franciosi_app.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', Home.as_view(), name='home'),  # Usando as_view()
    path('produtos/', include('products.urls'), name='produtos')
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)