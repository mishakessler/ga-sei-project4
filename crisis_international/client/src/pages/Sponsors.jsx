import React, { Component } from 'react'
import { Link, Route, withRouter } from 'react-router-dom';

// Components
import Hero from '../components/Hero'
import Subheader from '../components/Subheader'
import Listing from './Listing'
import Sponsor from './Sponsor'
import Disclaimer from '../components/Disclaimer'

// Forms
import CreateListingForm from '../components/forms/CreateListingForm'
import CreateSposorForm from '../components/forms/CreateSponsorForm'
import EditListingForm from '../components/forms/EditListingForm'
import EditSponsorForm from '../components/forms/EditSponsorForm'
import LoginForm from '../components/forms/LoginForm'

// API Functions
import {
  createSponsor,
  indexSponsors,
  showSponsor,
  updateSponsor,
  destroySponsor,
} from '../services/sponsor'

import {
  createListing,
  indexListings,
  showListing,
  updateListing,
  destroyListing
} from '../services/listing'

// Assets
import Logo from '../assets/graphics/CI-Wordmark-White.png'

class Sponsors extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: "page",
      title: "View All Sponsors",
      tagline: null,
      description: null,
      helper: null,
      sponsors: [],
    }
  }

  render() {
    return (
      <div className="index sponsors">
        <Hero
          type={this.state.type}
          title={this.state.title}
          tagline={this.state.tagline}
          description={this.state.description}
          helper={this.state.helper}
        />
      </div>
    )
  }
}

export default withRouter(Sponsors)