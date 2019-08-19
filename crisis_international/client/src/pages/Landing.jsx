// React
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

// Components
import Hero from '../components/Hero'
import Subheader from '../components/Subheader'

// Forms

// API Functions

// Assets
import Logo from '../assets/graphics/CI-Wordmark-White.png'

class Landing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: "page",
      title: "Welcome to Crisis International Enterprise",
      tagline: "",
      description: "Log in below to access your Enterprise dashboard.",
      helper: "",
    }
  }

  render() {
    return (
      <>
        <Hero
          type={this.state.type}
          title={this.state.title}
          tagline={this.state.tagline}
          description={this.state.description}
          helper={this.state.helper}
        />
        <div className="page landing-page box-shadow">

        </div>
      </>
    )
  }
}

export default withRouter(Landing)