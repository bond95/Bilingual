from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^add$', views.add, name='add'),
    url(r'^composition/(?P<compositionId>[0-9]+)', views.composition, name='composition'),
    url(r'^get-composition/(?P<compositionId>[0-9]+)', views.getComposition, name='getComposition')
]