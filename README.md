# Bilingual
This web site is for creating and editing bilingual texts based on two examples in different languages.
## Main goal 

Main goal of this application is to get two same texts but in different languages and connect them sentence-by-sentence. For this it use dividing text to paragraphs, then to sentences, and comparing it by a few parameters, like length of sentence, some basic words (it get words that begining with upper case, and words on beginig and end of the sentence, then looking for that word and it traslation in elasticsearch, if word is not found, than it translate word through yandex translate and save result to elasticsearch, then with a fuzzy library try to find the most similar word in second sentence, if it find similarity, then second sentence get some point), if second sentence get more then 75% points, then sentences are similar.
## Installation
Required installations:
Elasticsearch ~5.0.1


* `pip install -r pip-req.dat`
* `npm install`

## Run
* Start Elasticsearch
* `python ./manage.py runserver 0.0.0.0:8000`
* `webpack --watch`

And go to http://127.0.0.1:8000

## Using

You can add new bilingual text by clicking on link `Add`, and fill fields, by choosing languages and upload texts that correspond that languages. Than in the main page you can see list of all bilingual texts. After choose one of them you can table that in raws has sentences that matches. If some sentences in first column doesn't match sentences in other column of the same raw, you can choose that sentence and move it in raw that will be matched.
