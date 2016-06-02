from django.conf.urls import url
from . import views


list_view_task = views.TaskViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

urlpatterns = [
    url(r'task/?$', list_view_task, name='task'),
]
