// React
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

// Components
import Hero from '../components/Hero'

// Forms

// API Functions

// Assets

class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: "page",
      title: "View All Articles",
      tagline: "A knowledge base for guides, research, and general information on crisis prevention, intervention, and postvention.",
      description: null,
      helper: null,
    }
  }
  render() {
    return (
      <>
        <Hero
          className="articles-hero"
          type={this.state.type}
          title={this.state.title}
          tagline={this.state.tagline}
          description={this.state.description}
          helper={this.state.helper}
        />
        <div className="page articles-page">
          <p>The Crisis International Knowledge Base is under construction. Please check back later or Contact Us to get involved.</p>
        </div>
      </>
    )
  }
}

export default withRouter(About)