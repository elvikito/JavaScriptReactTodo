from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
# from django.contrib.auth import get_user_model

# User = get_user_model()

class Task(models.Model):
    author = models.ForeignKey('auth.User', related_name='user')
    completed = models.BooleanField(default=False)
    description = models.TextField(max_length=255, null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    tags = models.TextField(max_length=100, null=True, blank=True)

    def __unicode__(self):
        return "%s -%s -%s -%s" % (self.completed,self.description,
                                   self.date, self.tags)
