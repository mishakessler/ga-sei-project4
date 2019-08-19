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
            <button
              onClick={this.showForm} >Add Sponsor</button>
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
                <div key={sponsor.id}>
                  <h3>{sponsor.sponsor_name}</h3>
                  <p>{sponsor.sponsor_tagline}</p>
                  <p><a href={sponsor.sponsor_website}>{sponsor.sponsor_website}</a></p>
                  <Link to={`/sponsors/${sponsor.id}`}>View Sponsor</Link>
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