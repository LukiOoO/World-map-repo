from django.urls import path
from . import views
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register('africa', views.AfricaView, basename='AfricaView')
router.register('antarctica', views.AntarcticaView, basename='AntarcticaView')
router.register('asia', views.AsiaView, basename='AsiaView')
router.register('australia', views.OceaniaView, basename='OceaniaView')
router.register('europe', views.EuropeView, basename='EuropeView')
router.register('north-america', views.NorthAmericaView,
                basename='NorthAmericaView')
router.register('south-america', views.SouthAmericaView,
                basename='SouthAmericaView')

urlpatterns = router.urls
