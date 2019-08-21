// React
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

// Components
import Hero from '../components/Hero'

// Forms

// API Functions

// Assets

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: "page",
      title: "Contact Crisis International",
      tagline: "Want to get in touch?",
      description: null,
      helper: null,
    }
  }

  render() {
    return (
      <>
        <Hero
          className="contact-hero"
          type={this.state.type}
          title={this.state.title}
          tagline={this.state.tagline}
          description={this.state.description}
          helper={this.state.helper}
        />
        <div className="page contact-page box-shadow" >
        </div>
      </>
    )
  }
}

export default withRouter(Contact)