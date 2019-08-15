import React, { Component } from 'react'
import { Link, Route, withRouter } from 'react-router-dom';

// Components
import Hero from '../components/Hero'
import Subheader from '../components/Subheader'
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

  componentDidMount = async () => {
    const sponsors = await indexSponsors();
    this.setState({
      sponsors: sponsors,
    })
  }


  render() {
    return (
      <div className="page sponsors-page">
        <Hero
          type={this.state.type}
          title={this.state.title}
          tagline={this.state.tagline}
          description={this.state.description}
          helper={this.state.helper}
        />
        <div className="index sponsors-index">
          {this.props.sponsors.map(sponsor =>
            <div key={sponsor.id}>
              <h2>{sponsor.sponsor_name}</h2>
              <p>{sponsor.sponsor_tagline}</p>
              <Link to={`/sponsors/${sponsor.id}`}>View Sponsor</Link>
            </div>
          )}
        </div>
      </div>

    )
  }
}

export default withRouter(Sponsors)