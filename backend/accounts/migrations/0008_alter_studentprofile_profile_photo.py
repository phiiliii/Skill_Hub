# Generated by Django 5.0.1 on 2024-03-17 05:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0007_remove_mentorprofile_bio_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentprofile',
            name='profile_photo',
            field=models.ImageField(default='profile_photos/Default_icon.jpg', null=True, upload_to='profile_photos'),
        ),
    ]