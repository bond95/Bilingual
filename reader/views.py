from django.shortcuts import render
from .models import Composition
from .forms import AddForm
from .utilities import handleUploadedFile
from .lib.parser.parser import BilingualPraser
from django.core import serializers

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
		form = AddForm(request.POST, request.FILES)
		if form.is_valid():
			file1 = handleUploadedFile(request.FILES['file1'])
			file2 = handleUploadedFile(request.FILES['file2'])

			parser = BilingualPraser(file1, file2, form.cleaned_data['language_1'], form.cleaned_data['language_2'])
			res = parser.parse()

			return redirect('index')
	form = AddForm()
	return render(request, 'add.html', { form: form })

def getComposition(request, compositionId):
	composition = Composition.objects.get(pk=compositionId)
	data = serializers.serialize("json", composition)
	return JsonResponse(data)
