from django.contrib import admin
from . import models

# Register your models here.


@admin.register(models.City)
class CityAdmin(admin.ModelAdmin):
    list_display = ['id', "name", "countrycode", "district", "population",]
    list_editable = ["name", "countrycode", "district", "population",]
    list_per_page = 20
    search_fields = ['id', 'name']


@admin.register(models.Country)
class CountryAdmin(admin.ModelAdmin):
    list_display = ['code', 'name', 'continent', 'region', 'surfacearea', 'indepyear', 'population',
                    'lifeexpectancy', 'gnp', 'gnpold', 'localname', 'governmentform', 'headofstate', 'capital', 'code2']
    list_editable = ['name', 'continent', 'region', 'surfacearea', 'indepyear', 'population',
                     'lifeexpectancy', 'gnp', 'gnpold', 'localname', 'governmentform', 'headofstate', 'code2']
    list_per_page = 20
    search_fields = ['name', 'continent']
