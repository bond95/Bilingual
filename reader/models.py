from django.db import models

# Create your models here.

class Composition(models.Model):
	title = models.CharField(max_length=200)
	language_1 = models.CharField(max_length=2)
	language_2 = models.CharField(max_length=2)

class Sentences(models.Model):
	sentence1 = models.CharField(max_length=4000)
	sentence2 = models.CharField(max_length=4000)
	order = models.IntegerField()
	composition = models.ForeignKey(Composition, on_delete=models.CASCADE)
