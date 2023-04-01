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
DefaultContentLanguage = "en"
languageCode = "en-us"
baseURL = "https://www.angularcorp.com"
languageCode = "en-us"
title = "{CodeTrace} - Discover Issues, Share Solutions."
disqusShortname = "yourDisqusShortname" // Add third-party comments system

staticDir = ["static", "themes/Niello/static"]

theme = "Niello"

[params]
keywords = ""   //SEO keywords
description = ""    //Site description
copyright = "&#xA9; 2019 - 2022 by guangmean. All Rights Reserved."
google_ad_client = "ca-pub-******"  //Optional, replace ca-pub-****** with your content
ga = "UA-******" //Optional, replace UA-****** with your content
sharethis = ""  //Optional, Add hou ShareThis appid here

[menu]
    # English
    [[languages.en.menu.niello]]
    identifier = "home"
    name = "Home"
    url = "/" 
    weight = 1 

    [[languages.en.menu.niello]]
    identifier = "tags"
    name = "Tags"
    url = "/en/tags/"
    weight = 2 

    [[languages.en.menu.niello]]
    identifier = "contact"
    name = "Contact"
    url = "/en/post/contact/"
    weight = 3 

    # Chinese
    [[languages.zh.menu.niello]]
    identifier = "home"
    name = "首页"
    url = "/zh/"
    weight = 1 

    [[languages.zh.menu.niello]]
    identifier = "tags"
    name = "标签"
    url = "/zh/tags/"
    weight = 2 

    [[languages.zh.menu.niello]]
    identifier = "contact"
    name = "关于"
    url = "/zh/post/contact/"
    weight = 3
    
```

# Google Adsense & Google Analytics
Niello support Google Adsnese code by configure the google_ad_client param in [params] block and Google Analytics code by the ga param in the site config.toml as abover. 

# ShareThis
Niello support share your content to other platforms by [ShareThis](https://sharethis.com).

# Demo

A fully demo is available here:	[https://www.angularcorp.com](https://www.angularcorp.com) 


