# Math Learning

Simple app for learning math using react and django rest api

## How to run

1.  Install python 3.10 on your computer when installing, check add path to python

2.  Install Node.js on Your Computer

3.  install mysqlserver on your computer and mysqlworkbeanch or similar program

4.  Clone repo git-clone https://github.com/LukiOoO/Math-Lerning-repo.git

5.  in Mysql Server Create a database named world_map_app and import the data from the file world-map-app-database.sql into it

6.  In the dev.py file located at world-map-backend > world-map-backend > settings > dev.py in DATABASES, replace haslo123 with your Mysql server password provided at setup.

        DATABASES = {
        'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'world_map_app',
        'HOST': 'localhost',
        'USER': 'root',
        'PASSWORD': 'Your Password'
        }
        }

7.  Install python in extensions in visual studio code

8.  Install pipenv by typing pip install pipenv in cmd

9.  in the visual studio code terminal, go to Your Location \World-map-app\world-map-backend and type pipenv install after instalation type pipenv shell

10. By clicking Ctrl + shift + p, open the commend palette and type Python: Select Interpreter and select the pipenv environment created step above

11. to run server backend type in visual studio terminal code in Your Location \World-map-app\world-map-backend

python manage.py runserver

    If everything ran successfully you should get something like this

        System check identified no issues (0 silenced).
        March 05, 2023 - 17:00:24
        Django version 4.1.7, using settings 'world-map-backend.settings.dev'
        Starting development server at http://127.0.0.1:8000/
        Quit the server with CTRL-BREAK

12. without closing the previously opened termianl, open a new terminal and go to the location of your Localization World-map-app\world-map-frontend>.  
    make sure you haven't opened a terminal with pipenv enabled if you have, type deactivate And type npm i

13. to start the server frontend type npm start and you should open a window with a properly working application

## to correctly select a marker on a planet you should scroll down view png
