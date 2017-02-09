import tempfile
import os

def handleUploadedFile(f):
	fd, temp_path = tempfile.mkstemp()
	f_temp = os.fdopen(fd, 'wb+')
	for chunk in f.chunks():
		f_temp.write(chunk)
	return f_temp