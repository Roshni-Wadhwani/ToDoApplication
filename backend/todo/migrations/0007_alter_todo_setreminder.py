# Generated by Django 4.0.6 on 2023-06-23 05:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0006_alter_todo_due_alter_todo_setreminder'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='setReminder',
            field=models.BooleanField(default=False),
        ),
    ]
