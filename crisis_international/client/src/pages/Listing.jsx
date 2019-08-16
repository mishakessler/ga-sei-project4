import React, { Component } from 'react'
import { Link, Route, withRouter } from 'react-router-dom';

// Components
import Hero from '../components/Hero'
import Subheader from '../components/Subheader'
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


class Listing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: "resource",
      helper: null,
      listing: [],
      showForm: false,
    }
  }

  componentDidMount = async () => {
    const listing = await showListing(this.props.match.params.id)
    this.setState({
      listing: listing,
    })
  }

  showForm = () => {
    this.setState({
      showForm: true,
    })
  }

  render() {
    return (
      <div className="page listing-page">
        <Hero
          type={this.state.type}
          title={this.state.listing.listing_name}
          tagline={this.state.listing.listing_tagline}
          description={this.state.listing.listing_name}
          helper={this.state.helper}
        />
        <EditListingForm />
      </div>
    )
  }
}

export default withRouter(Listing)