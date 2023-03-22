from rest_framework import serializers
from . import models


class CountrySerializer(serializers.ModelSerializer):
    capital = serializers.SerializerMethodField()

    class Meta:
        model = models.Country
        fields = ('name', 'indepyear', 'headofstate', 'capital')

    def get_capital(self, obj):
        city = models.City.objects.filter(id=obj.capital).first()
        return city.name if city else None
