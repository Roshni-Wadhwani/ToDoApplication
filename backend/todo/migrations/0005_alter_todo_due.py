# Generated by Django 4.0.6 on 2023-06-22 14:36

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0004_todo_due_todo_setreminder'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='due',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]