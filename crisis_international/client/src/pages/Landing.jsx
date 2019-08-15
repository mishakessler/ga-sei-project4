import React, { Component } from 'react'
import { Link, Route, withRouter } from 'react-router-dom';

// Components
import Hero from '../components/Hero'
import Subheader from '../components/Subheader'
import Disclaimer from '../components/Disclaimer'

// Forms
import CreateListingForm from '../components/forms/CreateListingForm'
import CreateSponsorForm from '../components/forms/CreateSponsorForm'
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

class Landing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: "page",
      title: "Welcome to Crisis International",
      tagline: "Are you, or is someone you know, in crisis?",
      description: "In the midst of a crisis, we often don't know where to go for help. Let's change that.",
      helper: "Not sure where to start? View crisis resources by visiting our directory, browsing popular categories, or learn more about Crisis International below.",
    }
  }

  render() {
    return (
      <div className="page landing-page">
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

export default withRouter(Landing)