// React
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

// Components
import Hero from '../components/Hero'

// Forms

// API Functions

// Assets

class Directory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: "page",
      title: "View All Members",
      tagline: "A directory of Crisis International users who represent Sponsors and/or work in crisis prevention, intervention, and postvention.",
      description: null,
      helper: null,
    }
  }

  render() {
    return (
      <>
        <Hero
          className="directory-hero"
          type={this.state.type}
          title={this.state.title}
          tagline={this.state.tagline}
          description={this.state.description}
          helper={this.state.helper}
        />
        <div className="page directory-page">
          <p>The Crisis International Directory is under construction. Please check back later or Contact Us to get involved.</p>
        </div>
      </>
    )
  }
}

export default withRouter(Directory)