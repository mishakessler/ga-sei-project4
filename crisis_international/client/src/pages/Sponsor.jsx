// React
import React, { Component } from 'react'

// React Router
import { withRouter } from 'react-router-dom';

// React Semantic
import { Button } from 'semantic-ui-react'

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

  // showForm = () => {
  //   this.setState({
  //     showForm: true,
  //     hideFormButton: true,
  //   })
  // }

  // hideForm = () => {
  //   this.setState({
  //     showForm: false,
  //     hideFormButton: false,
  //   })
  // }

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

          <div className="sponsors-form">
            {!this.state.hideFormButton &&
              <Button
                animated='fade'
                size='large'
                color='teal'
                onClick={this.showForm} >
                <Button.Content visible>See Something Wrong?</Button.Content>
                <Button.Content hidden>Update This Sponsor</Button.Content>
              </Button>
            }
            {this.state.showForm && <EditSponsorForm
              sponsor_name={this.state.sponsor.sponsor_name}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              successAlert={this.state.successAlert}
              errorAlert={this.state.errorAlert}
              hideForm={this.hideForm}
            />}
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(Sponsor)