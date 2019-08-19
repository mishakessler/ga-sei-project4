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
      title: "Welcome to Crisis International",
      tagline: "Are you, or is someone you know, in crisis?",
      description: "In the midst of a crisis, we often don't know where to go for help. Let's change that.",
      helper: "Not sure where to start? View crisis resources by visiting our directory, browsing popular categories, or learn more about Crisis International below.",
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
        <div className="page landing-page">

        </div>
      </>
    )
  }
}

export default withRouter(Landing)