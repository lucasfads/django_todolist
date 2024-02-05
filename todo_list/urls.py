from django.urls import path

from . import views

app_name = "todo_list"
urlpatterns = [
    path("", views.index, name="index"),
    path('add/', views.add_task, name='add_task'),
    path('delete/<int:task_id>/', views.delete_task, name='delete_task'),
    path('toggle-done/<int:task_id>/', views.toggle_task_done, name='toggle_task_done'),
]