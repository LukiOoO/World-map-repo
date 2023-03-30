# from django.urls import path
# from . import views
# from rest_framework.routers import SimpleRouter
# from django.views.generic import TemplateView


# router = SimpleRouter()
# router.register('xd', views.HomePageViewSet, basename='xd')
# router.register(path('', TemplateView.as_view(
#     template_name='icons_app/index.html')))

# urlpatterns = router.urls

from django.urls import path
from django.views.generic import TemplateView
from . import views
from .views import LogoViewSet

urlpatterns = [
    path('', TemplateView.as_view(template_name='icons_app/index.html')),
    path('logo/', views.LogoViewSet.as_view({'get': 'list'})),

]
