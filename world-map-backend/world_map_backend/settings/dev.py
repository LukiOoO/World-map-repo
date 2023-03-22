from .common import *

DEBUG = True


SECRET_KEY = 'django-insecure-aswfdob8ky(j3plhk&!6ymywp@4rq$p2w=)2-yjqs@+(-bc@#n'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'world_map_app',
        'HOST': 'localhost',
        'USER': 'root',
        'PASSWORD': 'haslo123'
    }
}
