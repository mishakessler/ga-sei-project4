// React
import React, { Component } from 'react'

// React Router
import { withRouter } from 'react-router-dom';

// React Semantic
import { Header, Card, Icon, Image, Button, Modal } from 'semantic-ui-react'

// Components
import Hero from '../components/Hero'

// Forms
import CreateListingForm from '../components/forms/CreateListingForm'

// API Functions
import {
  createListing,
} from '../services/listing'

class Listings extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: "page",
      title: "View All Resources",
      tagline: null,
      description: null,
      helper: null,

      errorAlert: false,
      successAlert: false,

      listings: [],
      listingData: {
        listing_name: '',
        listing_tagline: '',
        listing_desc: '',
        listing_industry: '',
        listing_category: '',
        // listing_url_to_img: '',
        listing_medium: '',
        listing_age: '',
        listing_population: '',
        listing_language: '',
        listing_hours: '',
        listing_email: '',
        listing_phone: '',
        listing_sms: '',
        listing_url: '',
        listing_address: '',
        listing_city: '',
        listing_region: '',
        listing_country: '',
        listing_coverage: '',
      }
    }
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
      const newListing = await createListing(this.state.listingData);
      this.setState((prevState) => ({
        listings: [
          ...prevState.listings, newListing,
        ],
        errorAlert: false,
        successAlert: true,
      }))
    } catch (e) {
      console.log(e)
      this.setState({
        errorAlert: true,
        successAlert: false,
      });
    }
  }

  render() {
    return (
      <>
        <Hero
          className="listings-hero"
          type={this.state.type}
          title={this.state.title}
          tagline={this.state.tagline}
          description={this.state.description}
          helper={this.state.helper}
        />

        <div className="form-container listings-form">
          <Modal
            trigger={
              <Button
                animated='fade'
                size='large'
                color='teal'
                onClick={this.showModal}
                className='modal-button' >
                <Button.Content visible>Add A Resource</Button.Content>
                <Button.Content hidden>Save A Life</Button.Content>
              </Button>}
            closeIcon
          >
            <Header icon='certificate' content='Add A Resource' />
            <Modal.Content
              scrolling>
              <CreateListingForm
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                successAlert={this.state.successAlert}
                errorAlert={this.state.errorAlert}
              />
            </Modal.Content>
          </Modal>
        </div>

        <div className="page listings-page box-shadow">
          <div className="index listings-index">
            {this.props.listings.map(listing =>
              <div key={listing.id} className="listings-cards">
                <Card.Group>
                  <Card
                    href={`/resources/${listing.id}`}
                    color='teal'
                    className='smooth'
                  >
                    {/* <Image src={PostImage} wrapped ui={true} /> */}
                    <Image src={listing.listing_url_to_img} className="overlay" wrapped ui={true} />
                    <Card.Content>
                      <Card.Header>{listing.listing_name}</Card.Header>
                      <Card.Meta>
                        <a>
                          <Icon name='map marker alternate' />
                          {listing.listing_country}
                        </a>
                      </Card.Meta>
                      <Card.Description>
                        {listing.listing_tagline}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <p>At a glance:</p>
                      <p><a>
                        <Icon name='clock' />
                        {listing.listing_hours}
                      </a></p>
                      <p><a>
                        <Icon name='mobile' />
                        {listing.listing_category}
                      </a></p>
                      <p><a>
                        <Icon name='user' />
                        {listing.listing_age}
                      </a></p>
                      <p><a>
                        <Icon name='users' />
                        {listing.listing_population}
                      </a></p>
                      <p><a>
                        <Icon name='language' />
                        {listing.listing_language}
                      </a></p>
                    </Card.Content>
                  </Card>
                </Card.Group>
              </div>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(Listings)