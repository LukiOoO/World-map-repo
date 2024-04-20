from django.contrib import admin

from . import models


@admin.register(models.Pictures)
class PictureAdmin(admin.ModelAdmin):
    picture = models.Pictures()
