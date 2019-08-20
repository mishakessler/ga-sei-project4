// React
import React, { Component } from 'react'

// React Router
import { Link, withRouter } from 'react-router-dom';

// React Semantic
import { Card, Icon, Image, Button } from 'semantic-ui-react'

// Components
import Hero from '../components/Hero'

// Forms
import CreateSponsorForm from '../components/forms/CreateSponsorForm'

// API Functions
import {
  createSponsor,
} from '../services/sponsor'

// Assets
import Logo from '../assets/graphics/CI-Wordmark-White.png'
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
      sponsors: [],
      showForm: false,
      hideFormButton: false,
      errorAlert: false,
      sponsor: {
        sponsor_name: '',
        sponsor_email: '',
        password_digest: '',
      }
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      sponsor: {
        ...prevState.sponsor,
        [name]: value
      }
    }))
  }

  handleSubmit = async (ev) => {
    try {
      ev.preventDefault()
      const newSponsor = await createSponsor(this.state.sponsor);
      this.setState((prevState) => ({
        sponsors: [
          ...prevState.sponsors, newSponsor,
        ],
        showForm: false,
      }))
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
      <>
        <Hero
          className="sponsors-hero"
          type={this.state.type}
          title={this.state.title}
          tagline={this.state.tagline}
          description={this.state.description}
          helper={this.state.helper}
        />
        <div className="sponsors-form">
          {!this.state.hideFormButton &&
            <Button
              animated='fade'
              size='large'
              color='teal'
              onClick={this.showForm} >
              <Button.Content visible>Add Your Organization</Button.Content>
              <Button.Content hidden>Join Our Mission</Button.Content>
            </Button>
          }
          {this.state.showForm &&
            <CreateSponsorForm
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              successAlert={this.state.successAlert}
              errorAlert={this.state.errorAlert}
              hideForm={this.hideForm}
            />}
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
                    >
                      <Image src={PostImage} wrapped ui={true} />
                      <Card.Content>
                        <Card.Header>{sponsor.sponsor_name}</Card.Header>
                        <Card.Meta>
                          {sponsor.sponsor_tagline}
                        </Card.Meta>
                        <Card.Description>
                          {sponsor.sponsor_desc}
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <a>
                          <Icon name='country' />
                          {sponsor.sponsor_country}
                        </a>

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