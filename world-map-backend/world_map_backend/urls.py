"""world_map_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
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

from django.conf import settings
from django.contrib import admin
from django.urls import path, include
import debug_toolbar
from django.conf.urls.static import static

admin.site.site_header = 'World Map Site Admin'
admin.site.index_title = 'Admin'

handler404 = 'icons_app.views.custom_404'


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('world_map_data.urls')),
    path('', include('icons_app.urls')),
    path('__debug__/', include(debug_toolbar.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_URL)
