from django.forms import ModelChoiceField, ModelForm
from django.contrib import admin

from .models import *

class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 0


class ProductCategoryAdmin(admin.ModelAdmin):
    #list_display = [field.name for field in ProductCategory._meta.fields]
    list_display = ["id", "name", "is_active"]

    class Meta:
        model = Category

admin.site.register(Category, ProductCategoryAdmin)


class ProductAdmin (admin.ModelAdmin):
    list_display = [field.name for field in Product._meta.fields]
    inlines = [ProductImageInline]

    class Meta:
        model = Product

admin.site.register(Product, ProductAdmin)


class ProductImageAdmin (admin.ModelAdmin):
    list_display = [field.name for field in ProductImage._meta.fields]

    class Meta:
        model = ProductImage

admin.site.register(ProductImage, ProductImageAdmin)


#-----------------------------------------------------------------------
# class SmartphoneAdminForm(ModelForm):
#
#     def __init__(self, *args, **kwargs):
#         super().__init__(*args, **kwargs)
#         instance = kwargs.get('instance')
#         if instance and not instance.sd:
#             self.fields['sd_volume_max'].widget.attrs.update({
#                 'readonly': True, 'style': 'background: lightgray;'
#             })
#
#     def clean(self):
#         if not self.cleaned_data['sd']:
#             self.cleaned_data['sd_volume_max'] = None
#         return self.cleaned_data
#
#
# class NotebookAdmin(admin.ModelAdmin):
#
#     def formfield_for_foreignkey(self, db_field, request, **kwargs):
#         if db_field.name == 'category':
#             return ModelChoiceField(Category.objects.filter(slug='notebooks'))
#         return super().formfield_for_foreignkey(db_field, request, **kwargs)
#
#
# class SmartphoneAdmin(admin.ModelAdmin):
#
#     change_form_template = 'admin.html'
#     form = SmartphoneAdminForm
#
#     def formfield_for_foreignkey(self, db_field, request, **kwargs):
#         if db_field.name == 'category':
#             return ModelChoiceField(Category.objects.filter(slug='smartphones'))
#         return super().formfield_for_foreignkey(db_field, request, **kwargs)


#admin.site.register(Category)
#admin.site.register(Notebook, NotebookAdmin)
#admin.site.register(Smartphone, SmartphoneAdmin)
#admin.site.register(CartProduct)
#admin.site.register(Cart)
#admin.site.register(Customer)
#admin.site.register(Order)

