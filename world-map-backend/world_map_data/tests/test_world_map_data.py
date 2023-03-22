from world_map_data.serializers import CountrySerializer
from django.test import RequestFactory
from world_map_data.views import BaseContinentView
import pytest
from unittest.mock import Mock
from world_map_data import models


class TestBaseContinentView:
    def test_get_queryset(self):
        view = BaseContinentView()
        view.continent = 'Europe'

        # Utwórz atrapę (mock) obiektu `Country.objects.all()`
        mock_queryset = Mock()
        models.Country.objects.all = Mock(return_value=mock_queryset)

        # Wywołaj metodę `get_queryset`
        queryset = view.get_queryset()

        # Sprawdź, czy filtrowanie po kontynencie zostało wykonane poprawnie
        mock_queryset.filter.assert_called_once_with(continent='Europe')
        assert queryset == mock_queryset.filter.return_value

    def test_get_serializer_context(self):
        view = BaseContinentView()
        request = RequestFactory().get('/')
        view.request = request
        serializer_context = view.get_serializer_context()
        assert serializer_context == {'request': request}
