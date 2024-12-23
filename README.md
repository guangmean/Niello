# Niello - Advanced Hugo Dark Theme

---

Niello is a modern and feature-rich Hugo theme, designed to elegantly showcase your content with a sleek dark aesthetic. With its responsive design, Niello adapts perfectly to all screen sizes for a smooth browsing experience. The theme comes equipped with Google Analytics, AdSense support, Disqus comments, social sharing, and built-in search functionality, making it easy to manage and expand your online presence.

Note: Only releases based on tags are considered stable versions.

---

## Key Features
- **Dark Mode**: Offers a sleek dark theme for enhanced readability and visual appeal.
- **Responsive Design**: Adapts seamlessly to any screen size for a smooth browsing experience.
- **Multi-language Support (i18n)**: Ready for global audiences with built-in internationalization.
- **Content Search**: Easily locate articles with integrated search functionality.
- **Automatic Image Extraction**: Automatically pulls images from articles for a richer presentation.
- **Monetization**:
  - **Google AdSense**: Supports ads for easy site monetization.
  - **Google Analytics**: Track site performance and user engagement.

- **Enhanced Styling**:
  - **Tailwind CSS**: Powered by Tailwind for fast and flexible styling.
  - **Syntax Highlighting**: Provides clear code display for technical content.

- **Organized Archives**: Displays past posts by date, making content easier to navigate. 
- **Ignore Some Categories**: Hide the posts that you don’t want to show. 

--- 

## Screenshot
![Theme Screenshot](https://raw.githubusercontent.com/guangmean/Niello/master/images/theme_sc_home.png)

---

## Installation

To install the Niello theme, run the following command in the root directory of your Hugo site:

```shell
git clone https://github.com/guangmean/Niello.git themes/Niello
```

---

## Configuration

Below is an example of the hugo.toml file(previously config.toml) for your site:

```toml
baseURL = "https://www.angularcorp.com/" # Must end with splash
defaultContentLanguage = "en"
defaultContentLanguageInSubdir = true
disqusShortname = "yourDisqusShortname" // Add third-party comments system

staticDir = ["static", "themes/Niello/static"]

theme = "Niello"

[languages]
	[languages.en]
		title = "{CodeTrace} - Discover Issues, Share Solutions."
		languageCode = "en-us"
		LanguageName = "🇺🇸EN"
		contentDir = "content/en"
		weight = 1
		[[languages.en.menus.main]]
			name = 'Home'
			pageRef = '/'
			weight = 1
		[[languages.en.menus.main]]
			name = 'Categories'
			pageRef = '/categories'
			weight = 2
		[[languages.en.menus.main]]
			name = 'Tags'
			pageRef = '/tags'
			weight = 3
		[[languages.en.menus.main]]
			name = 'Contact'
			pageRef = '/contact'
			weight = 4
	[languages.zh]
		title = "{码途轨迹} - 发现问题，分享解决."
        languageCode = "zh-cn"
        LanguageName = "🇨🇳CN"
        contentDir = "content/zh"
        weight = 2
		[[languages.zh.menus.main]]
			name = '首页'
			pageRef = '/'
			weight = 1
		[[languages.zh.menus.main]]
			name = '文章分类'
			pageRef = '/categories'
			weight = 2
		[[languages.zh.menus.main]]
			name = '标签'
			pageRef = '/tags'
			weight = 3
		[[languages.zh.menus.main]]
			name = '联系我们'
			pageRef = '/contact'
			weight = 4
        
[params]
[params.google]
	google_ad_client = "ca-pub-******"  //Optional, replace ca-pub-****** with your content
	ga4 = "G-******" //Optional, replace G-****** with your Google Analytics GA4
[params.bannershowcase]
	categories = ["AI"]
	limit = 2
[params.email]
	contact = "angularcorp@outlook.com"
[params.ignore]
	categories = ["privacy", "terms", "archives", "cookie"]

copyright = "&#xA9; 2019 ~ 2024 by guangmean. All Rights Reserved."
sharethis = ""  //Optional, Add hou ShareThis appid here

[outputs]
  home = ["HTML", "JSON"]
    
```

---

## Overriding Theme i18n Keys

If you need to customize certain translation keys without modifying theme files, you can override the theme's i18n keys at the site level. Simply create an `i18n` folder in your site’s root directory and add the keys you want to override there.

To override `sitename`, `siteslogan`, `siteseokeywords` and `siteseodescription` from the theme’s i18n file, follow these steps:

1. In your site’s root directory, create an `i18n` folder if it doesn’t already exist.
2. Inside the `i18n` folder, create the appropriate language file (e.g., `en.toml`).
3. Add the following content to override the theme's i18n keys:

```shell

   # File path: i18n/en.toml
   [sitename]
   other = "Site Name"

   [siteslogan]
   other = "Site Slogan"

   [siteseokeywords]
   other = "Site Home SEO Keywords"

   [siteseodescription]
   other = "Site Home SEO Description"
   
```

---

## Customizing the Theme by Editing Source Code

If you plan to modify this theme, note that it is built with TailwindCSS. Before making changes, ensure you initialize TailwindCSS in your project and follow the setup instructions to properly configure your development environment.

```shell

cd themes/Niello

npm install -D tailwindcss

# Below cmd is not required
npx tailwindcss init # This will create the tailwind.config.js which already included in Niello

```

---

## Google Adsense & Google Analytics 4 (GA4)

Niello supports Google AdSense by configuring the googleadclient parameter in the [params] block and Google Analytics 4 (GA4) by setting the ga parameter in the hugo.toml file(previously config.toml), as shown above.

---

## Search

To enable the search functionality, you need to configure JSON output in the hugo.toml file by adding the following:

```shell
[outputs]
  home = ["HTML", "JSON"]
```

And a search folder with an _index.md file under the content directory is required, for example: content/en/search/_index.md

+++

title = "Search Results"  
date = 2024-12-13T15:00:00+08:00  
draft = false  
layout = "search"  

+++

With this setup, the search URL will be /en/search/?q=keywords

---

## Archives(Options)

To enable the archives functionality, you need to manually add an archives.md file to the content root directory:

```shell
|--- content
|-------| archives.md
```

or multilingual exampl:

```shell
|--- content
|-------| en	
|----------| archives.md # English
|-------| zh	
|----------| archives.md # Chinese
```
The content should be as follows:

```shell
+++
title = 'Archives'
date = 2024-10-25T09:16:03+08:00
draft = false
categories = ["archives"]
layout = "archives"
+++

```

---

## Ignore Posts(Options)

To exclude posts like cookie.md, privacy.md, and terms.md, configure the site parameters as follows:

```shell
[params]
[params.ignore]
	categories = ["privacy", "terms", "archives", "cookie"]
```
The content structure is as follows, and posts to be ignored must have categories specified in their front matter.

```shell	
|---content/en
			|---cookie.md
			|---privacy.md
			|---terms.md
			|
			|---/example1
					|---example1-1.md
					|---example1-2.md
			|---/example2
					|---example2-1.md
					|---example2-2.md
					|---example2-3.md
|---content/fr
|---content/zh
|---content/de
```

## ShareThis

Niello supports sharing your content to other platforms via [ShareThis](https://sharethis.com).

---

## Live Demo

A full demo is available here:	[https://www.angularcorp.com](https://www.angularcorp.com) 

---

## How to run the exampleSite

Run the following command in your site root directory to launch the example site

```shell
hugo server --source themes/Niello/exampleSite --themesDir ../.. --theme Niello
```
---

## Buy a Coffee for Me

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/I2I1NFXI2)


