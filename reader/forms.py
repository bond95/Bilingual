from django import forms

class AddForm(forms.Form):
	languages = (
		('en', 'English'),
        ('ru', 'Russian'),
        ('cz', 'Czech'),
    )
	title = forms.CharField(max_length=100)
	file1 = forms.FileField()
	file2 = forms.FileField()
	language_1 = forms.ChoiceField(choices=languages)
	language_2 = forms.ChoiceField(choices=languages)
