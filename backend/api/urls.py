from django.urls import path
from .views import OpenAiView

urlpatterns = [

    path('openai', OpenAiView.as_view(), name="openapiview"),
]
