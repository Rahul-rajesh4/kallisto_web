# Generated by Django 4.2.5 on 2023-12-09 07:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('back_app', '0004_remove_size_count'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductSizeCount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('count', models.PositiveIntegerField(default=0)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back_app.products')),
                ('size', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back_app.size')),
            ],
        ),
    ]
