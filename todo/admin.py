from django.contrib import admin
from todo.models import Task
# Register your models here.


class TaskAdmin(admin.ModelAdmin):
    exclude = ('author',)
    list_display = ('completed', 'description', 'date', 'tags')

    def has_change_permission(self, request, obj=None):
        has_class_permission = super(TaskAdmin,
                                     self).has_change_permission(request, obj)
        if not has_class_permission:
            return False
        if obj is not None and not request.user.is_superuser and request.user.id != obj.author.id:
            return False
        return True

    def queryset(self, request):
        if request.user.is_superuser:
            return Task.objects.all()
        return Task.objects.filter(author=request.user)

    def save_model(self, request, obj, form, change):
        if not change:
            obj.author = request.user
        obj.save()

# admin.site.register(Task, TaskAdmin)
admin.site.register(Task)
