# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-08 12:46
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('reader', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Parts',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order', models.IntegerField()),
                ('composition', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='reader.Composition')),
            ],
        ),
        migrations.RenameField(
            model_name='sentences',
            old_name='sentence1',
            new_name='sentence',
        ),
        migrations.RemoveField(
            model_name='sentences',
            name='composition',
        ),
        migrations.RemoveField(
            model_name='sentences',
            name='order',
        ),
        migrations.RemoveField(
            model_name='sentences',
            name='sentence2',
        ),
        migrations.AddField(
            model_name='sentences',
            name='part1',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='part1', to='reader.Parts'),
        ),
        migrations.AddField(
            model_name='sentences',
            name='part2',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='part2', to='reader.Parts'),
        ),
    ]