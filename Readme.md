---
---

**IMPORTANT**: Any changes you commit will be immediately visible on the site. Please preview your changes first.

# Things an editor may want to do

## Before events

- Add title (as it will appear in the nav
- date
- venue
- start time
- link to Lanyrd page
- Add the ticket widget

## After events

- mark the event as having past - **Alex, how is this done?**
- add video
- add slides
- link to tweets
- link to blog posts
- link to photos

## Change the way the menu looks

This is defined in: **_includes > nav.html**

## Add a person

There’s a list of people here [_includes > organisers.html](https://github.com/dannyhope/uxbrighton/tree/gh-pages/_includes/organisers.html "")

Duplicate and modify one of the people that’s already in the list.

## Edit a conference page

Main conference content is stored in the [_layouts](https://github.com/dannyhope/uxbrighton/tree/gh-pages/_layouts "") folder (not in the [_posts](https://github.com/dannyhope/uxbrighton/tree/gh-pages/_posts "") opposed to markdown files).

_layouts > conference-2010.html
_layouts > conference-2011.html
_layouts > conference-2012.html
_layouts > conference-2013.html
_layouts > conference-2014.html
_layouts > conference-2014-holding.html (the holding page)

**These layouts are referenced in ?**

* get it from Eventbrite
* find the event
* paste it in

**needs more detail**

## Edit a template

All of the templates are in _layouts

## Edit the mini header

This is done in **_includes > header-mini.html**

## Change the appearance of a template (CSS)

Templates are all in /_layout

## Edit a conference page

Conference pages appear at 2 URLs so the content is technically stored in a template, all templates are in _layouts, that’s where you’ll find what you need

## Add an event

* Go to **_posts**
* Duplicate an existing event and modify the front matter

## Make an event invisible

Make sure that the front matter includes:

upcoming: 
stub: yes

## Change the title of a page

Do it in the front matter, for example, add **title: Hello World** to the front matter

## Run the site locally

You will need

- Xcode 
- Xcode Command Line Tools 
- Ruby
- Ruby gems (package manager)
- (In the terminal, type) gem install jekyll
	-  [Jekyll](http://jekyllrb.com/). If you've not worked with Jekyll before, follow the [quick start guide](http://jekyllrb.com/docs/quickstart/), 
- Ensure you have all the [dependencies](http://jekyllrb.com/docs/installation/) installed first.

In the terminal type:
cd /Users/dannyhope/Dropbox/UX\ Brighton\ \(private\)/Repos/uxbrightonn
jekyll serve -w

Browse to http://0.0.0.0:4000/

## URLs

The following domains point to uxbrighton.org.uk, the canonical domain. This is set at the 123-reg control panel.

uxbri.org	→ uxbrighton.org.uk
uxbri.com	→ uxbrighton.org.uk
uxbri.co.uk	→ uxbrighton.org.uk

Subdomains are set at panel.dreamhost.com

Subdomains for conferences are forwarded to folders thus:

2010.uxbrighton.org.uk → uxbrighton.org.uk/2010
2011.uxbrighton.org.uk → uxbrighton.org.uk/2011
2012.uxbrighton.org.uk → uxbrighton.org.uk/2012
2013.uxbrighton.org.uk → uxbrighton.org.uk/2013
2014.uxbrighton.org.uk → uxbrighton.org.uk/2014
2015.uxbrighton.org.uk → uxbrighton.org.uk/2015

When a conference page is the homepage, should we just show it at the root or at the permalink?

--

# Front matter

**layout: default**
**layout: event-page**

**categories: [archive]** ?
**conference: false** ?
**conference: true** ?
**homepage: false** ?
**homepage: true** ?
**noinfo: true** ?
**stub: yes** ?

**upcoming: no** ?
**published: true** ?
**start: 7pm** ?
**start: null** ?
**start:** ?
**venue: null** ?
**venue:** ?
**venue: Fabrica** …Lighthouse etc are defined in**?**
**organisers:**
	- **Alex**
	- **Patrick** rendered into the bottom of the event page

**lanyrd-url: http://lanyrd.com/2013/ux-brighton-oktoberfest/** ?
**lanyrd: http://lanyrd.com/2013/uxbrighton-june/**
**calendar-url: #** ?

## 404 page
**permalink: /404.html** designates it as a 404 page