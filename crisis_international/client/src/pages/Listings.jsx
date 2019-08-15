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

export default class IndexListings extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="index listings">
        <h2>All Listings Here</h2>
      </div>
    )
  }
}
