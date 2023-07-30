# Niello
Niello is a clean and elegant Hugo dark theme that is perfect for showcasing your content. It supports Google Analytics, Adsense, and other features to help you grow your online presence.

[Note: master branch is unstable, only tags version are stable.]


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
This is an example of site config.toml (Note: Nginx bypass based config):

```toml
defaultContentLanguage = "en"
languageCode = "en-us"
defaultContentLanguageInSubdir = true
baseURL = "https://www.angularcorp.com/" # Must end with splash
languageCode = "en-us"
title = "{CodeTrace} - Discover Issues, Share Solutions."
disqusShortname = "yourDisqusShortname" // Add third-party comments system

staticDir = ["static", "themes/Niello/static"]

theme = "Niello"

[languages]
	[languages.en]
		#baseURL = "Don't write baseURL here for each language, will cause issue."
		title = "{CodeTrace} - Discover Issues, Share Solutions."
		languageCode = "en-us"
		LanguageName = "🇺🇸English"
		contentDir = "content/en"
		weight = 1
	[languages.zh]
		title = "{码途轨迹} - 发现问题，分享解决."
        languageCode = "zh-cn"
        LanguageName = "🇨🇳中文"
        contentDir = "content/zh"
        weight = 2
        
[params]
keywords = ""   //SEO keywords
description = ""    //Site description
copyright = "&#xA9; 2019 - 2022 by guangmean. All Rights Reserved."
google_ad_client = "ca-pub-******"  //Optional, replace ca-pub-****** with your content
ga = "UA-******" // 【【【 Deprecated after July 1,2023 】】】, Optional, replace UA-****** with your Google Universal Analytics   
ga4 = "G-******" //Optional, replace G-****** with your Google Analytics GA4
sharethis = ""  //Optional, Add hou ShareThis appid here

[menu]
    # English
    [[languages.en.menu.niello]]
    identifier = "home"
    name = "Home"
    url = "/en/" 
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

# Google Adsense & Google Analytics 4 (GA4)
Niello support Google Adsnese code by configure the google_ad_client param in [params] block and Google Analytics code by the ga param in the site config.toml as abover. 

# ShareThis
Niello support share your content to other platforms by [ShareThis](https://sharethis.com).

# Demo

A fully demo is available here:	[https://www.angularcorp.com](https://www.angularcorp.com) 

# Buy a Coffee for Me

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/I2I1NFXI2)


