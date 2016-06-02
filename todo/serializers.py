from rest_framework import serializers
from todo.models import Task


class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fiels = ('id', 'completed', 'date', 'description', 'tags')
        read_only_fields = ('author')

    def create(self, validate_data):
        request = self.context.get('request')
        data = {
            'author': request.user
        }
        data.update(validate_data)
        return super(TaskSerializer, self).create(data)
