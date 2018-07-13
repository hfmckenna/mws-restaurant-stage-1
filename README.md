#Restaurant Review Project
---
##Introduction

Restaurant reviews app with user generated reviews and interactive map, courtesy of Mapbox. Usable on all modern browsers with ES6 support, may have compatibility issues with older browser versions.

##Technical Notes

**Be aware to avoid storing a personal API key within this public repo the Mapbox API key is referenced to in a Gitignored JS config file. You can find the references to this script's object property in main.js and restaurant_info.js `config.MAPBOX_API`. The config script is included within index.html, so you may want to simply add your own API key in place of the object reference and delete the script inclusion from the HTML. The project will not work properly until you add a functioning Mapbox API key in place of `config.MAPBOX_API`.**

Simply clone the project from (here on Github)[https://github.com/hfmckenna/mws-restaurant-stage-1]. Within the created directory you can start a local server through whatever method you like best. Python is one simple solution:

1. If you don't have it already download and install Python from python.org then:
- From within your install directory on the command line run `python3 -m http.server 8000`
- Python 2 users will need SimpleHTTPServer installed and run `python -m SimpleHTTPServer 8000`
- Windows users be aware you will want to add Python to PATH, this is part of the .exe installer method when you first install.
2. Visit `http://localhost:8000` in your browser.