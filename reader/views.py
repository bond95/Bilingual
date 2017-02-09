from django.shortcuts import render, redirect
from .models import Composition, Sentences, Parts
from .forms import AddForm
from .utilities import handleUploadedFile
from .lib.parser.parser import BilingualPraser
from django.core import serializers
from django.http import JsonResponse

# Create your views here.

def index(request):
	compositions = Composition.objects.all()
	context = {
		'compositions': compositions
	}
	print(context)
	return render(request, 'index.html', context)

def add(request):
	if request.method == 'POST':
		print('Work1')
		form = AddForm(request.POST, request.FILES)
		if form.is_valid():
			print('Work')
			file1 = handleUploadedFile(request.FILES['file1'])
			file2 = handleUploadedFile(request.FILES['file2'])
			file1.seek(0)
			file2.seek(0)

			parser = BilingualPraser(file1, file2, form.cleaned_data['language_1'], form.cleaned_data['language_2'])
			res = parser.parse()

			new_composition = Composition(title=form.cleaned_data['title'], language_1=form.cleaned_data['language_1'], language_2=form.cleaned_data['language_2'])
			new_composition.save()

			index = 1
			for par in res:
				new_part = Parts(order=index, composition=new_composition)
				new_part.save()
				for sentence in par['first']:
					new_sentence = Sentences(sentence=sentence, part1=new_part)
					new_sentence.save()
				for sentence in par['second']:
					new_sentence = Sentences(sentence=sentence, part2=new_part)
					new_sentence.save()
				index += 1

			return redirect('index')
	else:
		form = AddForm()
	return render(request, 'add.html', { 'form': form })

def getComposition(request, compositionId):
	composition = Composition.objects.get(pk=compositionId)
	result = {'sentences': [], 'language1': 'en', 'language2': 'ru'}
	# for part in composition.parts_set.all():
	# 	result['sentences'].insert(part.order, {
	# 		composition.language_1: [],
	# 		composition.language_2: []
	# 		})
	# 	if hasattr(part, 'sentences_set'):
	# 		sent1 = part.sentences_set.filter(part1__isnull=False)
	# 		sent2 = part.sentences_set.filter(part2__isnull=False)
	# 		for sentence in sent1:
	# 			result['sentences'][part.order][composition.language_1].append(sentence.sentence)
	# 		for sentence in sent2:
	# 			result['sentences'][part.order][composition.language_2].append(sentence.sentence)
	# data = serializers.serialize("json", result)
	result['sentences'].append({'en': ['asdfasdfsadfasdf', 'asdfasdf', 'werwerwerwer', 'xcvzxvczxvc'], 'ru': ['івафівафіва', 'asdfasdfsadf', 'werewrewrewr']})
	result['sentences'].append({'en': ['sdfsadfasdfew', 'asdfasdfsadfasdf', 'asdfasdf'], 'ru': ['cvncvnn', 'xcvzxvzxcv', 'hgjkghjkghjk']})
	result['sentences'].append({'en': ['etyretytry', 'iuouioooo', 'yuiohjkhjk'], 'ru': ['nvmvbmn', 'fghjfgh', 'rtyerthdfgh']})
	return JsonResponse(result)

def composition(request, compositionId):
	return render(request, 'composition.html', { 'id': compositionId })
