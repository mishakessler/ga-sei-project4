# Crisis International


## Table of Contents
- [Project Description](#project-description)
  - [Project Team](#project-team)
  - [Project Inspiration](#project-inspiration)
  - [Project Permissions](#project-permissions)
- [Design](#design)
  - [Branding](#branding)
  <!-- - [Sitemap](#sitemap) -->
  - [Mockups](#mockups)
    <!-- - [Desktop](#desktop)
    - [Mobile](#mobile) -->
- [Development](#development)
  - [ERD Model](#erd-model)
    - [MVP Erd](#mvp-erd)
    - [Post-MVP ERD](#post-mvp-erd)
  - [Functional Goals](#functional-goals)
    - [MVP](#mvp-goals)
    - [Post-MVP](#post-mvp-goals)
  - [Functional Heirarchy](#functional-heirarchy)
    - [Repo Structure](#repo-structure)
    - [Database Table Structure](#express-database-structure)
    - [React Structure](#react-structure)
  - [Functional Components](#functional-components)
    - [Component Breakdown](#component-breakdown)
    - [Component Timeframes](#component-timeframes)
    - [Helper Functions](#helper-functions)
  - [Supporting Libraries](#supporting-libraries)
- [Project Review](#project-review)
  - [Code Showcase](#code-showcase)
  - [Bugs, Issues, and Resolutions](#issues-&-resolutions)
- [Project Followup](#project-followup)

<br>
<br>

# Overview

<!-- > Badges? -->

![Mockup](https://imgur.com/ZtLFzFJ.png)

## Project Description

<b>Crisis International</b> is a resource directory and knowledge base for crisis intervention and postvention needs. 

By developing a comprehensive, self-maintaining, globally-reliable directory for crisis resources– and most importantly, by leveraging international expertise, encouraging engagement from individuals and organizations, and using modern improvements in user-oriented design– <b>Crisis International</b> is creating a financially sustainable, freely available platform with potential for enterprise solutions while pursuing its mission of saving precious, life-saving minutes in a user's search for crisis resources.

### Project Team

Created, designed, and developed by [Misha Kessler](https://github.com/mishakessler).

### Project Inspiration

<b>Crisis International</b> was conceived and developed when it became apparent that many individuals– laypersons and professionals alike– often feel frustration while urgently searching for relevant crisis resources. This search has long been impeded by the lack of a single authoritative directory of crisis resources– one that is also well-designed, well-maintained, and follows best practices of user accessibility, navigability, and findability– leaving laypersons to search Google and professionals to email their professional networks.

By cataloguing and organizing resources, with a priority on user- and volunteer- buy in, <b>Crisis International</b> seeks to create a self-sustaining, budget-friendly directory that saves precious minutes for those in crisis. By building this on a custom RESTful API and providing white-label enterprise/SAAS solutions to human services organizations, <b>Crisis International</b> removes the burdens of resource documentation from those organizations and allows them to spend more time working on what matters.

### Project Permissions

Digital assets used with full licensing and permission from [Death to Stock Photo](https://deathtothestockphoto.com/), [Freepik](https://www.freepik.com/home), and [Unsplash](https://unsplash.com/). Custom digital designs, iconography, and branding by [Misha Kessler](https://www.mishakessler.com).

Digital assets stored locally and via Imgur at the [<b>Crisis International</b> Imgur Repo](https://imgur.com/a/vtq1AP4).

<br>
<br>

# Design

## Branding

### Brand Identity

![Brand Identity](https://imgur.com/jxvE3bH.png)

### Color Palette

![Color Palette](https://imgur.com/tG6450A.png)

### Logomarks

![Wordmark](https://imgur.com/nR347Ah.png)

![Wordmark](https://imgur.com/uQ2xASc.png)

![Wordmark](https://imgur.com/pJLidEZ.png)

![Wordmark](https://imgur.com/40T49qf.png)

<br>

<!-- ## Sitemap

![Sitemap](https://imgur.com/)
<p><em>Sitemap</em></p>

<br> -->

## Mockups

### Desktop 

![Landing](https://imgur.com/ZtLFzFJ.png)

![About & Assistant](https://imgur.com/eF1bEv2.png)

![Resource Categories](https://imgur.com/2Geidy5.png)

![Knowledge Base Categories](https://imgur.com/pzf5Qqi.png)

![New & Updates](https://imgur.com/RyumAMt.png)

![Resource Index](https://imgur.com/Eq7XLhQ.png)

![Single Resource](https://imgur.com/q0AmYF1.png)

![Submit Resource](https://imgur.com/aZuY9yA.png)

![Crisis Modal](https://imgur.com/rtKg1k1.png)

<!-- ### Mobile

![](https://imgur.com/) -->

<br>
<br>

# Development

## ERD Model

### MVP ERD

![ERD Model](https://imgur.com/nPRiRfG.png)

### Post-MVP ERD

![ERD Model](https://imgur.com/d4H2qB7.png)

<br>

## Functional Goals

### MVP Goals

Server-Side
- User Accounts & Authentication
- Ruby on Rails Resource Tables
  - Sponsors
  - Resources
  - Articles

Client-Side
- CRUD Functionality on All Resources via Axios
- Core React Components

<!-- 
### Post-MVP Goals -->


<br>

## Functional Heirarchy

### Repo Structure

```
crisis-international

|___ client (Refer to React Structure below.)
      
|___ server

|___ readme.md
```

### Ruby Database Structure

```
crisisinternational_db

|___ sponsors  (create, read)
|___ resources  (create, read, update, destroy)
|___ attributes  (read)
|___ resource_attributes (read)
```

### React Structure

```
client

|___ public
      |___ favicon.ico
      |___ index.html

|___ src
      |___ assets
            |___ images
            |___ graphics
            
      |___ stateless components
            |___ HeaderNav.jsx
            |___ Hero.jsx
            |___ CrisisModal.jsx
            |___ CategoryNav.jsx
            |___ FooterNav.jsx

      |___ stateful components
            |___ RegisterForm.jsx
            |___ LoginForm.jsx
            |___ SubmitForm.jsx
            |___ EditForm.jsx
            |___ Resources.jsx
            |___ Resource.jsx
            |___ Articles.jsx
            |___ Article.jsx

      |___ pages
            |___ Landing.jsx
            |___ Directory.jsx
                  |___ ResourcePage.jsx
                  |___ SubmitPage.jsx
            |___ KnowledgeBase.jsx
                  |___ ArticlePage.jsx
            |___ About.jsx
            |___ Contact.jsx

      |___ services
            |___ api-helper.js

      |___ App.css
      |___ App.js
      |___ index.css
      |___ index.js

|___ readme.md
```

<br>

## Functional Components

### Component Breakdown

> Components (and a description with a stateful or stateless tag) go here.

| Component | State | Description | 
| --- | :---: | :---: |  
| Lorem ipsum | Stateless | Lorem ipsum dolor sit amet, consecteteur adupiscing elit, sed do eiusmod tempor incididunt ut labore... | 

### Component Timeframes

> Time expectation (padded with an extra hour, minimum, to play it safe) go here.

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Lorem ipsum | High | x hrs | y hrs |


### Helper Functions

> Generic helper functions go here.

| Function | Description | 
| --- | :---: |  
| Lorem | ipsum dolor sit amet | 

<br>

## Supporting Libraries

> Packages installed via node and gem go here.

* Server-Side
  * 

* Authentication
  * 

* Client-Side
  * axios
  * react
  * react-router-dom
  * react-semantic-ui
  * react-spring

<br>
<br>

# Project Review

## Code Showcase

> Any code of which we are proud go here.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

<br>

## Issues & Resolutions

> Any code bugs, errors, and fixes go here.

```
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier
```

```                
**RESOLUTION**: Missing comma after first object in sources {} object
```

<br>
<br>

# Project Followup

> Any tasks we would like to revisit after graduation go here.