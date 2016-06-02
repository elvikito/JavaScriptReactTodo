from models import Task
from rest_framework.response import Response
from rest_framework import viewsets, status
from serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def list(self, request, format=None):
        if not request.user.is_staff:
            response = {"Message": "Permision denied"}
            return Response(response, status=status.HTTP_403_FORBIDDEN)
        self.queryset = Task.objects.all().filter(author=request.user)
        return super(TaskViewSet, self).list(request)

    def create(self, request, format=None):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
