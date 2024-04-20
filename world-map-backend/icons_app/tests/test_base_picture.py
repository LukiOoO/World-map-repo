from django.urls import reverse
from rest_framework.test import APIClient
from icons_app.models import Pictures
from rest_framework.test import APITestCase
from django.core.files.uploadedfile import SimpleUploadedFile
from icons_app.serializers import PictrueSerializer
from icons_app.models import Pictures
import pytest
from rest_framework.test import APIRequestFactory
from icons_app.views import BasePictureViewSet


class PictureSerializerTest(APITestCase):
    def setUp(self):
        # Tworzymy tymczasowy obiekt Picture dla testów
        self.image = SimpleUploadedFile(
            "test_image.jpg", b"file_content", content_type="image/jpeg")
        self.picture = Pictures.objects.create(id=2, image_field=self.image)

    def tearDown(self):
        self.picture.delete()

    def test_picture_serializer(self):
        serializer = PictrueSerializer(instance=self.picture)
        data = serializer.data

        self.assertEqual(data['id'], self.picture.id)
        self.assertIsNotNone(data['image_field'])


@pytest.mark.django_db
def test_pictures_model():
    # Tworzenie obiektu zdjęcia
    image_file = SimpleUploadedFile(
        "image.jpg", b"file_content", content_type="image/jpeg")
    picture = Pictures.objects.create(id=1, image_field=image_file)

    # Sprawdzanie czy zdjęcie zostało zapisane w bazie danych
    assert picture.id is not None

    assert picture.image_field.name.startswith(
        "icons_app/static/images/image_")
    assert picture.image_field.name.endswith(".jpg")


@pytest.mark.django_db
@pytest.fixture
def picture():
    return Pictures.objects.create(
        id=1,
        image_field='static/images/image.jpg'
    )


@pytest.mark.django_db
@pytest.fixture
def test_base_picture_view_set(picture):
    client = APIClient()
    view = BasePictureViewSet()
    view.request = client.get(reverse('basepicture-list'))
    view.format_kwarg = {}
    view.kwargs = {'pk': picture.id}
    view.id = picture.id
    queryset = view.get_queryset()
    serializer_context = view.get_serializer_context()
    serializer = view.serializer_class(
        queryset, many=True, context=serializer_context)
    assert serializer.data == [
        {'id': 1, 'image_field': 'static/images/image.jpg'}]
