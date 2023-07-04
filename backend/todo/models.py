from datetime import datetime
from django.db import models
from django.utils import timezone

# Create your models here.
class ToDo(models.Model):
    title=models.CharField(max_length=120)
    description=models.TextField(null=True,blank=True)
    completed=models.BooleanField(default=False)
    setReminder=models.BooleanField(default=False)
    due = models.DateTimeField(default=timezone.now,null=True,blank=True)
