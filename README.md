# Crisis International

## Table of Contents
- [Project Overview](#project-description)
  - [Inspiration](#project-inspiration)
  - [Business Model](#project-model)
  - [Team](#project-team)
  - [Permissions](#project-permissions)
- [Design](#design)
  - [Branding](#branding)
  - [Mockups](#mockups)
- [Development](#development)
  - [MVP](#mvp)
    - [ERD Model](#mvp-erd-model)
    - [Functional Goals](#functional-goals)
    - [Functional Heirarchy](#functional-heirarchy)
      - [Repo Structure](#repo-structure)
      - [Database Table Structure](#express-database-structure)
      - [React Structure](#react-structure)
    - [Functional Components](#functional-components)
      - [Component Breakdown](#component-breakdown)
      - [Component Timeframes](#component-timeframes)
      - [Helper Functions](#helper-functions)
    - [Supporting Libraries](#supporting-libraries)
  - [Post-MVP]
    - [Post-MVP ERD Model](#post-mvp-erd-model)
    - [Post-MVP Goals](#post-mvp-goals)
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

By developing a comprehensive, self-maintaining, global directory and knowledge base for crisis resources– and most importantly, by leveraging international expertise, encouraging engagement from individuals and organizations, and using modern improvements in user-oriented design– <b>Crisis International</b> is creating a financially sustainable, freely available service with the potential for enterprise solutions, pursuing its mission of saving precious minutes in a user's search for crisis resources, and thus, saving lives.

### Project Inspiration

<b>Crisis International</b> was conceived when it became apparent that many individuals– laypersons and professionals alike– often feel frustration while urgently searching for relevant crisis resources.

![Crisis Texts](https://imgur.com/ewPRmjS.png)

This search has long been impeded by the lack of a single authoritative directory of crisis resources– one that is well-designed, well-maintained, and follows best practices of user accessibility, navigability, and findability. This absence results in a social services culture that depends on professionals' individual knowledge and experience, if not Google searches, rather than comprehensive and wide-ranging 

### Project Model

By cataloguing and organizing resources, with a strong emphasis on organizational, user, and volunteer contribution, <b>Crisis International</b> seeks to create a financially and functionally self-sustaining service that saves precious minutes for those in crisis. 

By building this on a custom RESTful API and providing white-label enterprise/SAAS solutions to human services and social work organizations, <b>Crisis International</b> removes the burdens of resource documentation from those organizations and enables professionals on the front-lines of social work to spend more time working on what matters– their clients.

### Project Team

Created, designed, and developed by [Misha Kessler](https://github.com/mishakessler).

### Project Permissions

* Third-party digital assets used with full licensing and permissions from [Death to Stock Photo](https://deathtothestockphoto.com/), [FontAwesome](https://fontawesome.com/), [Freepik](https://www.freepik.com/home), and [Unsplash](https://unsplash.com/). 
* Custom digital designs, iconography, and branding by [Misha Kessler](https://www.mishakessler.com).
* Digital assets stored locally and via Imgur at the [<b>Crisis International</b> Imgur Repo](https://imgur.com/a/vtq1AP4).

<br>
<br>

# Installation

## 

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


<br>
<br>

# Development

## MVP

### MVP ERD Model

![ERD Model](https://imgur.com/h2okfqi.png)

<br>

### Functional Goals

Server-Side
- Sponsor Table
  - Account Authentication
  - Null Prevention
  - Duplicate Prevention
- Listing Table
  - Comprehensive
  - Built with post-MVP planning.

Client-Side
- CRUD Functionality on Sponsors & Listings via Axios
- React Router for pages and components.
- Local asset library with branded graphics, stock media, and colors palettes.

<br>

### Functional Heirarchy

#### Repo Structure

> Files which have been edited or added will be listed here.

```
crisis-international

|___ app/
      |___ controllers/
            |___ listings_controller.rb
            |___ sponsors_controller.rb

      |___ models/
            |___ listing.rb
            |___ sponsor.rb

|___ client/ (Refer to React Structure below.) 

|___ config/
      |___ initializers/
            |___ cors.rb
      |___ routes.rb

|___ db/
      |___ migrate/*
      |___ schema.rb
      |___ seeds.rb

|___ Gemfile
```

#### Ruby Database Structure

```
crisisinternational_db

|___ sponsors  (create, read)

|___ resources  (create, read, update, destroy)
```

#### React Structure

```
client

|___ public
      |___ favicon.ico
      |___ index.html

|___ src
      |___ assets
            |___ images
            |___ graphics
            
      |___ functional components
            |___ Header.jsx
            |___ Hero.jsx
            |___ SubHeader.jsx
            |___ Disclaimer.jsx
            |___ Footer.jsx

      |___ class components
            |___ CreateListingForm.jsx
            |___ CreateSponsorForm.jsx
            |___ EditListingForm.jsx
            |___ EditSponsorForm.jsx
            |___ IndexListings.jsx
            |___ IndexSponsors.jsx
            |___ LoginForm.jsx
            |___ ShowListing.jsx
            |___ ShowSponsor.jsx

      |___ pages
            |___ About.jsx
            |___ Contact.jsx
            |___ Directory.jsx
            |___ Landing.jsx
            |___ Listing.jsx
            |___ Sponsor.jsx
            |___ Terms.jsx

      |___ services
            |___ sponsor.js
            |___ listing.js

      |___ App.css
      |___ App.js
      |___ index.css
      |___ index.js

|___ readme.md
```

<br>

### Functional Components

#### Component Breakdown

> Components (and a description with a stateful or stateless tag) go here.

| Component | State | Description | 
| --- | :---: | :---: |  
| Lorem ipsum | Stateless | Lorem ipsum dolor sit amet, consecteteur adupiscing elit, sed do eiusmod tempor incididunt ut labore... | 

#### Component Timeframes

> Time expectation (padded with an extra hour, minimum, to play it safe) go here.

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Lorem ipsum | High | x hrs | y hrs |


#### Helper Functions

> Generic helper functions go here.

| Function | Description | 
| --- | :---: |  
| Lorem | ipsum dolor sit amet | 

<br>

### Supporting Libraries

> Packages installed via node and gem go here.

* Ruby Gems
  * Bcrypt

* Client-Side
  * axios
  * react
  * react-fontawesome
  * react-ga
  * react-router-dom
  * react-semantic-ui
  * react-spring

<br>

## Post-MVP

### Post-MVP ERD Model

![ERD Model](https://imgur.com/d4H2qB7.png)

### Post-MVP Goals

Server-Side
- Generate Articles Table & Association
- Add User Tips, Favorites Tables & Associations
- Add Multiple Attribute Tables, Join Tables, Associations

Client-Side
- Affiliate Link Data for Sponsor Analytics
- "Users Helped" Counter
- Listing Categories, Tags, User Tips, Favorites
- Articles, Article Categories, Tags

<br>
<br>

# Project Review

## Code Showcase

> Any code of which we are proud go here.

```
<div className="page sponsors-page box-shadow">
          {this.props.sponsors &&
            <div className="index sponsors-index">
              {this.props.sponsors.map(sponsor =>
                <div key={sponsor.id} className="sponsors-cards">
                  <Card.Group>
                    <Card
                      href={`/sponsors/${sponsor.id}`}
                      color='teal'
                      className='smooth'
                    >
                      <Image src={PostImage} wrapped ui={true} />
                      <Card.Content>
                        <Card.Header>{sponsor.sponsor_name}</Card.Header>
                        <Card.Meta>
                          <a>
                            <Icon name='map marker alternate' />
                            {sponsor.sponsor_city}, {sponsor.sponsor_region}
                          </a>
                        </Card.Meta>
                        <Card.Description>
                          {sponsor.sponsor_tagline}
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        {sponsor.listings.map(sponsorlisting =>
                          <div key={sponsorlisting.id} >
                            <a href={`/resources/${sponsorlisting.id}`}>
                              <Icon name='' />
                              {sponsorlisting.listing_name}
                            </a>
                          </div>
                        )}
                      </Card.Content>
                    </Card>
                  </Card.Group>
                </div>
              )}
            </div>
          }
        </div>
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