# Generated by Django 5.0.1 on 2024-02-17 06:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recruiter', '0003_rename_recruiter_job_user_companyprofile_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='companyprofile',
            name='website',
            field=models.TextField(blank=True),
        ),
    ]
