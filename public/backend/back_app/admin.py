from django.contrib import admin
from .models import *
from django.utils.html import mark_safe

# Register your models here.
admin.site.register(login)
admin.site.register(UserRegister)
# admin.site.register(Products)
# admin.site.register(productsize)


class sizetabview(admin.TabularInline):
    model=productsize

class productlistview(admin.ModelAdmin):
    list_display=('id','name','actualprice','discountprice')
    inlines=[sizetabview,]
admin.site.register(Products,productlistview)
admin.site.register(cart)
admin.site.register(favourite)

class orderlistview(admin.ModelAdmin):
    list_display=('order_id','user_name','contact','product_name','selectedSize','Status')
    readonly_fields = ['image_tag']
    def image_tag(self, obj):
        if obj.image:  # Checking if the image field has a value
            return mark_safe(f'<img src="{obj.image.url}" style="max-height: 100px; max-width: 100px;" />')
        else:
            return "No Image"  # Or any placeholder text if there's no image

    image_tag.short_description = 'ImagePreview'
admin.site.register(order,orderlistview)