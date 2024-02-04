from django.shortcuts import render
from django.http import HttpResponse


from .models import Task


def index(request):
    tasks_list = Task.objects.order_by("-creation_date")
    context = {"tasks_list": tasks_list}
    return render(request, "todo_list/index.html", context)
