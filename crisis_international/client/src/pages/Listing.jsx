// React
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

// Components
import Hero from '../components/Hero'

// Forms
import EditListingForm from '../components/forms/EditListingForm'

// API Functions
import {
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
          image={this.state.listing.listing_url_to_img}
          title={this.state.listing.listing_name}
          tagline={this.state.listing.listing_tagline}
          description={this.state.listing.listing_desc}
          helper={this.state.helper}
        />
        <div className="listing-info">
          <a href={this.state.listing.listing_website} target="_blank">Website</a>
          <p>Category: {this.state.listing.listing_category}</p>
          <p>Contact: {this.state.listing.listing_phone}</p>
          <p>Coverage: {this.state.listing.listing_coverage}</p>
        </div>
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