from django.db import models

# Create your models here.


class Pictures(models.Model):
    id = models.IntegerField(primary_key=True)
    image_field = models.ImageField(
        upload_to='static/icons_app/images', null=True)
