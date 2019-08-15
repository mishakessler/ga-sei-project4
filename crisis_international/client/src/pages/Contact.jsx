import React, { Component } from 'react'
import { Link, Route, withRouter } from 'react-router-dom';

// Pages
import Landing from './pages/Landing'
import Directory from './pages/Directory'
import Listings from './pages/Listings'
import Listing from './pages/Listing'
import Sponsors from './pages/Sponsors'
import Sponsor from './pages/Sponsor'
import About from './pages/About'
import Contact from './pages/Contact'

// API Functions
import {
  createSponsor,
  indexSponsors,
  showSponsor,
  updateSponsor,
  destroySponsor,
} from './services/sponsor'

import {
  createListing,
  indexListings,
  showListing,
  updateListing,
  destroyListing
} from './services/listing'

// Stylesheet
import './App.css';

// Assets
import Logo from '../assets/graphics/CI-Wordmark-White.png'

function Contact() {
  return (
    <div className="page contact-page">
      <h2>Contact Page</h2>
    </div>
  )
}

export default withRouter(Contact)