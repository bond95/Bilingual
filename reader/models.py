from django.db import models

# Create your models here.

class Composition(models.Model):
	title = models.CharField(max_length=200)
	language_1 = models.CharField(max_length=2)
	language_2 = models.CharField(max_length=2)

class Parts(models.Model):
	order = models.IntegerField()
	composition = models.ForeignKey(Composition, on_delete=models.CASCADE)

class Sentences(models.Model):
	sentence = models.CharField(max_length=4000)
	part1 = models.ForeignKey(Parts, on_delete=models.CASCADE, related_name='part1', default=None, null=True)
	part2 = models.ForeignKey(Parts, on_delete=models.CASCADE, related_name='part2', default=None, null=True)
