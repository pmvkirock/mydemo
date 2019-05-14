from django.conf.urls import url
from django.urls import path
# from .views import list_expenses, create_expenses, update_expenses, delete_expenses
# from . import views

urlpatterns = [
    url(r'^$', views.index, name='index')
]