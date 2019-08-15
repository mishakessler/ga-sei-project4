import React, { Component } from 'react'
import { Link, Route, withRouter } from 'react-router-dom';

// Pages
import Landing from './pages/Landing'
import Directory from './pages/Directory'
import Listings from './pages/Listings'
import Sponsors from './pages/Sponsors'
import About from './pages/About'
import Contact from './pages/Contact'

// Components
import Hero from './components/Hero'
import Subheader from './components/Subheader'
import Listing from './pages/Listing'
import Sponsor from './pages/Sponsor'
import Disclaimer from './components/Disclaimer'

// Forms
import CreateListingForm from './components/forms/CreateListingForm'
import CreateSposorForm from './components/forms/CreateSposorForm'
import EditListingForm from './components/forms/EditListingForm'
import EditSponsorForm from './components/forms/EditSponsorForm'
import LoginForm from './components/forms/LoginForm'

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

class Sponsors extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="index sponsors">
        <h2>All Sponsors Here</h2>
      </div>
    )
  }
}

export default withRouter(Sponsors)