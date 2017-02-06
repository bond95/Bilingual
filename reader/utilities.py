import tempfile

def handleUploadedFile(f):
	temp_file = tempfile.mkstemp(text=True)
	for chunk in f.chunks():
		temp_file.write(chunk)
	return temp_file