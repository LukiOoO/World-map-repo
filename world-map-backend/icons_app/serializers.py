from rest_framework import serializers
from . import models


class PictrueSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Pictures
        fields = '__all__'

    # This is the magic function which does the work

    def get_photo_url(self, obj):
        request = self.context.get('request')
        photo_url = obj.fingerprint.url
        return request.build_absolute_uri(photo_url)
