from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.response import Response
from . import models
from . import serializers
from django.http import HttpResponse


# Create your views here.


class BaseContinentView(ReadOnlyModelViewSet):
    serializer_class = serializers.CountrySerializer
    continent = None

    def get_queryset(self):
        return models.Country.objects.all().filter(continent=self.continent)

    def get_serializer_context(self):
        try:
            return {'request': self.request}

        except models.Country.DoesNotExist:
            raise HttpResponse(status=204)


class AfricaView(BaseContinentView):
    continent = "Africa"


class AntarcticaView(BaseContinentView):
    continent = "Antarctica"


class AsiaView(BaseContinentView):
    continent = "Asia"


class OceaniaView(BaseContinentView):
    continent = "Oceania"


class EuropeView(BaseContinentView):
    continent = "Europe"


class NorthAmericaView(BaseContinentView):
    continent = "North America"


class SouthAmericaView(BaseContinentView):
    continent = "South America"
