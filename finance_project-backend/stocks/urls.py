from django.urls import path
from .views import ListCreateStocksView, ReOrderStocksView

urlpatterns = [
    path("", ListCreateStocksView.as_view()),
    path("reorder/", ReOrderStocksView.as_view()),
]
