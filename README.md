# Niello
Niello is a simple and clean dark mode Theme for "Hugo - Static Site Generator"


# Features

Simple, Clean

Syntax Highlight with highlight.js

Google Adsense

Google Analytics

HTML5 Boilerplate

Dark Mode


# Screenshot
![Theme Screenshot](https://raw.githubusercontent.com/guangmean/Niello/master/images/theme_sc_home.png)

# Installation

In the root of your Hugo site directory run:

```shell
git clone https://github.com/guangmean/Niello.git themes/Niello
```

# Configuration
This is an example of site config.toml:

```toml
baseURL = "https://www.angularcorp.com/"
languageCode = "en-us"
title = "Application Deveopment"

staticDir = ["static", "themes/Niello/static"]

[params]
keywords = ""
description = ""
copyright = "&#xA9; 2019 by guangmean. All Rights Reserved."
google_ad_client = "ca-pub-******"
ga = "UA-******"

[menu]
    [[menu.niello]]
    name = "Home"
    url = "/"
    weight = 1

    [[menu.niello]]
    name = "Contact"
    url = "/post/contact/"
    weight = 2
    
```

# Google Adsense & Google Analytics
Niello support Google Adsnese code by configure the google_ad_client param in [params] block and Google Analytics code by the ga param in the site config.toml as abover. 

# Demo

A fully demo is available here:	[https://www.angularcorp.com](https://www.angularcorp.com) 


