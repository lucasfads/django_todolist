from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.views import generic
from django.utils import timezone



from .models import Task


def index(request):
    tasks_list = Task.objects.order_by("creation_date")
    context = {"tasks_list": tasks_list}
    return render(request, "todo_list/index.html", context)

def add_task(request):
    if request.method == 'POST':
        task_text = request.POST.get('task_text')
        task = Task.objects.create(task_text=task_text, creation_date=timezone.now())
        return JsonResponse({'id': task.id, 'task_text': task.task_text})

def delete_task(request, task_id):
    if request.method == 'DELETE':
        Task.objects.filter(id=task_id).delete()
        return JsonResponse({'status': 'success'})

def toggle_task_done(request, task_id):
    if request.method == 'POST':
        task = Task.objects.get(id=task_id)
        task.done = not task.done
        task.save()
        return JsonResponse({'status': 'success', 'done': task.done})