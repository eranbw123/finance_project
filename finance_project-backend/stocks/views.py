from rest_framework import serializers
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from .serializers import StockSerializer
from .models import Stock


class ListCreateStocksView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        stocks = Stock.objects.filter(user=request.user)
        serializer = StockSerializer(stocks, many=True)
        return Response(serializer.data, status=200)

    def post(self, request, format=None):
        serializer = StockSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class ReOrderStocksView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        stocks_ids = request.data.get("ids")
        for index, id in enumerate(stocks_ids):
            if not id.isnumeric():
                return Response({f"'{id}' is not a valid id"}, status=400)
            stock = Stock.objects.filter(user=request.user).filter(id=id).first()
            if not stock:
                return Response({f"id - '{id}' does not exist"}, status=400)
            stock.position = index + 1
            stock.save()
        stocks = Stock.objects.filter(user=request.user)
        serializer = StockSerializer(stocks, many=True)
        return Response(serializer.data, status=200)
