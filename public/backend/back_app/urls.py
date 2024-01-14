from django.urls import path
from . import views


urlpatterns = [
    path('Registerapi',views.Registerapi.as_view(),name='Registerapi'),
    path('loginAPI',views.loginAPI.as_view(),name='loginAPI'),
    # path('AddProduct',views.AddProduct.as_view(),name='AddProduct'),
    path('filtermethod',views.filtermethod.as_view(),name='filtermethod'),
    path('getSingleproduct/<int:id>',views.getSingleproduct.as_view(),name='getSingleproduct'),
    path('getcartdetails',views.getcartdetails.as_view(),name='getcartdetails'),
    path('carditailsshow/<int:id>',views.carditailsshow.as_view(),name='carditailsshow'),
    path('deleteFromcart/<int:id>',views.deleteFromcart.as_view(),name='deleteFromcart'),
    path('addToFavarourites',views.addToFavarourites.as_view(),name='addToFavarourites'),
    path('favshow/<int:id>',views.favshow.as_view(),name='favshow'),
    path('faveRemove/<int:id>',views.faveRemove.as_view(),name='faveRemove'),
    path('bookProduct/<int:id>',views.bookProduct.as_view(),name='bookProduct'),
    path('getorder/<int:id>',views.getorder.as_view(),name='getorder'),
    path('cancelorder/<int:id>',views.cancelorder.as_view(),name='cancelorder'),

]