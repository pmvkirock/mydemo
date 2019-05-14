from django import forms
from posts.models import balances

class BalancesForm(forms.ModelForm):
    class Meta:
        model = balances
        fields = "__all__"