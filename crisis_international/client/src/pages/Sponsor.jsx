// React
import React, { Component } from 'react'

// React Router
import { withRouter } from 'react-router-dom';

// React Semantic
import { Header, Card, Icon, Image, Button, Modal } from 'semantic-ui-react'

// Components
import Hero from '../components/Hero'

// Forms
import EditSponsorForm from '../components/forms/EditSponsorForm'

// API Functions
import {
  showSponsor,
  updateSponsor,
  destroySponsor,
} from '../services/sponsor'

class Sponsor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: "sponsor",
      title: null,
      tagline: null,
      description: null,
      helper: null,

      errorAlert: false,
      successAlert: false,

      sponsor: [],
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

  componentDidMount = async () => {
    const sponsor = await showSponsor(this.props.match.params.id)
    this.setState({
      sponsor: sponsor,
    })
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
      const updatedSponsor = await updateSponsor(this.props.match.params.id, this.state.sponsorData)
      this.setState({
        sponsor: updatedSponsor,
        errorAlert: false,
        successAlert: true,
      })
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
          className="sponsor-hero"
          type={this.state.type}
          title={this.state.sponsor.sponsor_name}
          tagline={this.state.sponsor.sponsor_tagline}
          helper={this.state.helper}
        />

        <div className="page sponsor-page box-shadow">
          <div className="sponsor-content">
            <div className="sponsor-sidebar">
              <img src={this.state.sponsor.sponsor_url_to_logo} />
              <p>Website: <a href={this.state.sponsor.sponsor_website} target="_blank" rel="noopener noreferrer">{this.state.sponsor.sponsor_name}</a></p>
              <p>Location: {this.state.sponsor.sponsor_country}</p>
              <p>Language: {this.state.sponsor.sponsor_language}</p>
              <p></p>
            </div>
            <div className="sponsor-detail">
              <p>{this.state.sponsor.sponsor_desc}</p>
            </div>
          </div>

          <div className="form-container sponsors-form">
            <Modal
              trigger={
                <Button
                  animated='fade'
                  size='large'
                  color='teal'
                  onClick={this.showModal}
                  className='modal-button' >
                  <Button.Content visible>See something wrong?</Button.Content>
                  <Button.Content hidden>Edit This Sponsor</Button.Content>
                </Button>}
              closeIcon
            >
              <Header icon='map marker alternate'>Edit {this.state.sponsor.sponsor_name}</Header>
              <Modal.Content
                scrolling>
                <EditSponsorForm
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  successAlert={this.state.successAlert}
                  errorAlert={this.state.errorAlert}
                />
              </Modal.Content>
            </Modal>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(Sponsor)