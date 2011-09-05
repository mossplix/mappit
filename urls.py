from django.conf.urls.defaults import *
from map.views import main

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Example:
     (r'^$', main),
     (r'^static/(?P<path>.*)', 'django.views.static.serve',\
     {'document_root': '/home/mossplix/projects/UnicefDev/mapit/map/static/'}),

    # Uncomment the admin/doc line below to enable admin documentation:
    # (r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # (r'^admin/', include(admin.site.urls)),
)
