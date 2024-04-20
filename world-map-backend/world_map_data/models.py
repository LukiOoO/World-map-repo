from django.db import models
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class City(models.Model):
    # Field name made lowercase.
    id = models.AutoField(db_column='ID', primary_key=True)
    # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=35)
    # Field name made lowercase.
    countrycode = models.ForeignKey(
        'Country', models.DO_NOTHING, db_column='CountryCode')
    # Field name made lowercase.
    district = models.CharField(db_column='District', max_length=20)
    # Field name made lowercase.
    population = models.IntegerField(db_column='Population')

    class Meta:
        managed = False
        db_table = 'city'

    def __str__(self):
        return self.name


class Country(models.Model):
    # Field name made lowercase.
    code = models.CharField(db_column='Code', primary_key=True, max_length=3)
    # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=52)
    # Field name made lowercase.
    continent = models.CharField(db_column='Continent', max_length=13)
    # Field name made lowercase.
    region = models.CharField(db_column='Region', max_length=26)
    # Field name made lowercase.
    surfacearea = models.DecimalField(
        db_column='SurfaceArea', max_digits=10, decimal_places=2)
    # Field name made lowercase.
    indepyear = models.SmallIntegerField(
        db_column='IndepYear', blank=True, null=True)
    # Field name made lowercase.
    population = models.IntegerField(db_column='Population')
    # Field name made lowercase.
    lifeexpectancy = models.DecimalField(
        db_column='LifeExpectancy', max_digits=3, decimal_places=1, blank=True, null=True)
    # Field name made lowercase.
    gnp = models.DecimalField(
        db_column='GNP', max_digits=10, decimal_places=2, blank=True, null=True)
    # Field name made lowercase.
    gnpold = models.DecimalField(
        db_column='GNPOld', max_digits=10, decimal_places=2, blank=True, null=True)
    # Field name made lowercase.
    localname = models.CharField(db_column='LocalName', max_length=45)
    # Field name made lowercase.
    governmentform = models.CharField(
        db_column='GovernmentForm', max_length=45)
    # Field name made lowercase.
    headofstate = models.CharField(
        db_column='HeadOfState', max_length=60, blank=True, null=True)
    # Field name made lowercase.
    capital = models.IntegerField(db_column='Capital', blank=True, null=True)
    # Field name made lowercase.
    code2 = models.CharField(db_column='Code2', max_length=2)

    class Meta:
        managed = False
        db_table = 'country'

    def __str__(self):
        return self.name


class Countrylanguage(models.Model):
    # Field name made lowercase.
    countrycode = models.OneToOneField(
        Country, models.DO_NOTHING, db_column='CountryCode', primary_key=True)
    # Field name made lowercase.
    language = models.CharField(db_column='Language', max_length=30)
    # Field name made lowercase.
    isofficial = models.CharField(db_column='IsOfficial', max_length=1)
    # Field name made lowercase.
    percentage = models.DecimalField(
        db_column='Percentage', max_digits=4, decimal_places=1)

    class Meta:
        managed = False
        db_table = 'countrylanguage'
        unique_together = (('countrycode', 'language'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey(
        'DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'
