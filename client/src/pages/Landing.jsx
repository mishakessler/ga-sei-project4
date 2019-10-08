// React
import React, { Component } from 'react'

// React Router
import { withRouter } from 'react-router-dom';

// Components
import Hero from '../components/Hero'

// Forms

// API Functions

// Assets

class Landing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: "page",
      title: "Welcome to Crisis International Enterprise",
      tagline: "Making Crises Safer & Easier to Navigate",
      description: null,
      helper: "Log in below or Contact Us to get started.",
    }
  }

  render() {
    return (
      <>
        <Hero
          className="landing-hero"
          type={this.state.type}
          title={this.state.title}
          tagline={this.state.tagline}
          description={this.state.description}
          helper={this.state.helper}
        />
        <div className="page landing-page box-shadow">
          <p>Crisis International is a comprehensive resource directory, knowledge base, and professional network for crisis prevention, intervention, and postvention needs.<p>
            <br></br>
          </p>By leveraging international expertise, encouraging engagement from individuals and organizations in the field, and implementing modern improvements in user-oriented design, Crisis International is developing a financially-sustainable, globally-reliable platform in the pursuit of its foremost priority– saving precious minutes for any individual who needs help in a suicidal crisis.</p>
        </div>
      </>
    )
  }
}

export default withRouter(Landing)