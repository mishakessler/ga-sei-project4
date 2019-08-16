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
      hideFormButton: false,
      errorAlert: false,
      successAlert: false,
      listingData: {
        listing_name: '',
        listing_tagline: '',
      }
    }
  }

  componentDidMount = async () => {
    const listing = await showListing(this.props.match.params.id)
    this.setState({
      listing: listing,
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      listingData: {
        ...prevState.listingData,
        [name]: value
      }
    }))
  }

  handleSubmit = async (ev) => {
    try {
      ev.preventDefault()
      const updatedListing = await updateListing(this.props.match.params.id, this.state.listingData)
      this.setState({
        listing: updatedListing,
        showForm: false,
        successAlert: true,
      })
    } catch (e) {
      console.log(e)
      this.setState({
        errorAlert: true,
      });
    }
  }

  showForm = () => {
    this.setState({
      showForm: true,
      hideFormButton: true,
    })
  }

  hideForm = () => {
    this.setState({
      showForm: false,
      hideFormButton: false,
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
        <div className="listings-form">
          {!this.state.hideFormButton &&
            <button
              onClick={this.showForm} >Update Resource</button>
          }
          {this.state.showForm && <EditListingForm
            listing_name={this.state.listing.listing_name}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            successAlert={this.state.successAlert}
            errorAlert={this.state.errorAlert}
            hideForm={this.hideForm}
          />}
        </div>
      </div>
    )
  }
}

export default withRouter(Listing)