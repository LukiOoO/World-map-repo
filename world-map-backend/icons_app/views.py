from rest_framework.viewsets import ReadOnlyModelViewSet
from django.shortcuts import render
from . import models
from . import serializers
# Create your views here.


def custom_404(request, exception):
    return render(request, 'icons_app/404.html')


class BasePictureViewSet(ReadOnlyModelViewSet):
    serializer_class = serializers.PictrueSerializer

    def get_queryset(self):
        return self.model.objects.filter(id=self.id)

    def get_serializer_context(self):
        return {'request': self.request}


class HomePageViewSet(BasePictureViewSet):
    model = models.Pictures
    id = 1
