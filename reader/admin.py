from django.contrib import admin

from .models import Composition, Sentences, Parts

admin.site.register(Composition)
admin.site.register(Sentences)
admin.site.register(Parts)
# Register your models here.
