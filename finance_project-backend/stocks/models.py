from django.db import models
from django.contrib.auth.models import User


class UppserField(models.CharField):
    def get_prep_value(self, value):
        return value.upper()


class Stock(models.Model):
    symbol = UppserField(max_length=6, null=False, blank=False, unique=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    position = models.PositiveSmallIntegerField(blank=True, default=0)

    def save(self, *args, **kwargs):
        lastest_stock = Stock.objects.filter(user=self.user).last()
        print(self.position)
        if self.position == 0:
            if lastest_stock:
                self.position = lastest_stock.position + 1
        super(Stock, self).save(*args, **kwargs)

    class Meta:
        ordering = ["position"]
