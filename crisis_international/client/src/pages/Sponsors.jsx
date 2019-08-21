// React
import React, { Component } from 'react'

// React Router
import { Link, withRouter } from 'react-router-dom';

// React Semantic
import { Header, Card, Icon, Image, Button, Modal } from 'semantic-ui-react'

// Components
import Hero from '../components/Hero'

// Forms
import CreateSponsorForm from '../components/forms/CreateSponsorForm'

// API Functions
import {
  createSponsor,
} from '../services/sponsor'

// Assets
import PostImage from '../assets/images/ft-listing.jpg'


class Sponsors extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: "page",
      title: "View All Sponsors",
      tagline: null,
      description: null,
      helper: null,

      errorAlert: false,
      successAlert: false,

      sponsors: [],
      sponsorData: {
        sponsor_name: '',
        sponsor_email: '',
        password_digest: '',
        sponsor_tagline: '',
        sponsor_desc: '',
        sponsor_url_to_logo: '',
        sponsor_website: '',
        sponsor_phone: '',
        sponsor_address: '',
        sponsor_city: '',
        sponsor_region: '',
        sponsor_country: '',
      }
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      sponsorData: {
        ...prevState.sponsorData,
        [name]: value
      }
    }))
  }

  handleSubmit = async (ev) => {
    try {
      ev.preventDefault()
      const newSponsor = await createSponsor(this.state.sponsorData);
      this.setState((prevState) => ({
        sponsors: [
          ...prevState.sponsors, newSponsor
        ],
        errorAlert: false,
        successAlert: true,
      }))
    } catch (e) {
      console.log(e)
      this.setState({
        successAlert: false,
        errorAlert: true,
      });
    }
  }

  render() {
    return (
      <>
        <Hero
          className="sponsors-hero"
          type={this.state.type}
          title={this.state.title}
          tagline={this.state.tagline}
          description={this.state.description}
          helper={this.state.helper}
        />

        <div className="form-container sponsors-form">
          <Modal
            trigger={
              <Button
                animated='fade'
                size='large'
                color='teal'
                onClick={this.showModal}
                className='modal-button' >
                <Button.Content visible>Add Your Organization</Button.Content>
                <Button.Content hidden>Join Our Mission</Button.Content>
              </Button>}
            closeIcon
          >
            <Header icon='map marker alternate' content='Add Your Organization' />
            <Modal.Content
              scrolling>
              <CreateSponsorForm
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                successAlert={this.state.successAlert}
                errorAlert={this.state.errorAlert}
              />
            </Modal.Content>
          </Modal>
        </div>

        <div className="page sponsors-page box-shadow">
          {this.props.sponsors &&
            <div className="index sponsors-index">
              {this.props.sponsors.map(sponsor =>
                <div key={sponsor.id} className="sponsors-cards">
                  <Card.Group>
                    <Card
                      href={`/sponsors/${sponsor.id}`}
                      color='teal'
                      className='smooth'
                    >
                      <Image src={PostImage} wrapped ui={true} />
                      <Card.Content>
                        <Card.Header>{sponsor.sponsor_name}</Card.Header>
                        <Card.Meta>
                          <a>
                            <Icon name='map marker alternate' />
                            {sponsor.sponsor_city}, {sponsor.sponsor_region}
                          </a>
                        </Card.Meta>
                        <Card.Description>
                          {sponsor.sponsor_tagline}
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <p>Their resources include:</p>
                        {sponsor.listings.map(sponsorlisting =>
                          <div key={sponsorlisting.id} >
                            <a href={`/resources/${sponsorlisting.id}`}>
                              <Icon name='certificate' />
                              {sponsorlisting.listing_name}
                            </a>
                          </div>
                        )}
                      </Card.Content>
                    </Card>
                  </Card.Group>
                </div>
              )}
            </div>
          }
        </div>
      </>
    )
  }
}

export default withRouter(Sponsors)