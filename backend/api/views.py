from rest_framework.views import APIView
from django.http import JsonResponse
import os
import openai

# Load your API key from an environment variable or secret management service
openai.api_key = "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"


class OpenAiView(APIView):
    def get(self, request):
        models = openai.Model.list()
        res = {
            'models': models.data
        }
        return JsonResponse(res)

    def post(self, request):
        # print(request.data)
        message = request.data['message']
        model = request.data['currentModel']

        response = openai.Completion.create(
            model=model, prompt=message, temperature=0.5, max_tokens=100)
        res = {
            'message': response.choices[0].text
        }
        return JsonResponse(res)
