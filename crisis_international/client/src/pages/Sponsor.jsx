import React, { Component } from 'react'
import { Link, Route, withRouter } from 'react-router-dom';

// Components
import Hero from '../components/Hero'
import Subheader from '../components/Subheader'
import Listing from './Listing'
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

class Sponsor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: "sponsor",
      helper: null,
      sponsor: [],
    }
  }

  componentDidMount = async () => {
    const sponsor = await showSponsor(this.props.match.params.id)
    this.setState({
      sponsor: sponsor,
    })
  }

  render() {
    return (
      <div className="page sponsor-page">
        <Hero
          type={this.state.type}
          title={this.state.sponsor.sponsor_name}
          tagline={this.state.sponsor.sponsor_tagline}
          description={this.state.sponsor.sponsor_name}
          helper={this.state.helper}
        />
        <EditSponsorForm />
      </div>
    )
  }
}

export default withRouter(Sponsor)