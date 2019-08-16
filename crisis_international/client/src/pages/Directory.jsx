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

class Directory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: "page",
      title: "The Crisis International Resource Directory",
      tagline: "Find the resources you need, when you need them most.",
      description: null,
      helper: null,
    }
  }

  render() {
    return (
      <div className="page directory-page">
        <Hero
          type={this.state.type}
          title={this.state.title}
          tagline={this.state.tagline}
          description={this.state.description}
          helper={this.state.helper}
        />
        <div className="index directory-listings">
          {this.props.listings.map(listing =>
            <div key={listing.id}>
              <h2>{listing.listing_name}</h2>
              <p>{listing.listing_tagline}</p>
              <Link to={`/listings/${listing.id}`}>View Resource</Link>
            </div>
          )}
          <Link to="/listings">View All Resources</Link>
        </div>
        <div className="index directory-sponsors">
          {this.props.sponsors.map(sponsor =>
            <div key={sponsor.id}>
              <h2>{sponsor.sponsor_name}</h2>
              <p>{sponsor.sponsor_tagline}</p>
              <Link to={`/sponsors/${sponsor.id}`}>View Sponsor</Link>
            </div>
          )}
          <Link to="/sponsors">View All Sponsors</Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Directory)