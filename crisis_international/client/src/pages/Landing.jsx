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


class Landing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listings: [],
    }
  }

  componentDidMount = async () => {
    const listings = await indexListings();
    this.setState({
      listings: listings,
    })
  }

  render() {
    return (
      <div className="page landing-page">

        <h2>Landing Page</h2>
        <Hero />
        {this.state.listings.map(sponsor =>
          <div key={listing.id}>
            <h2>{listing.listing_name}</h2>
            <p>{listing.listing_tagline}</p>
          </div>
        )}
      </div>
    )
  }
}

export default withRouter(Landing)