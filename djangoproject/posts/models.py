from django.db import models
from django.template.defaultfilters import slugify
from django.contrib.auth.models import User
# Create your models here.

class balances(models.Model):
    created_on = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=42)
    desc = models.TextField()
    amount = models.DecimalField(decimal_places=2,max_digits=10)
    amt_type = models.CharField(max_length=20)