// React
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';

// Components
import Hero from '../components/Hero'
import Subheader from '../components/Subheader'

// Forms

// API Functions

// Assets
import Logo from '../assets/graphics/CI-Wordmark-White.png'

class Directory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: "page",
      title: "The Crisis International Resource Directory",
      tagline: "Find the resources you need, when you need them most.",
      description: null,
      helper: null,
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
        <div className="page directory-page">
        </div>
      </>
    )
  }
}

export default withRouter(Directory)