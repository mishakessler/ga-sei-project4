import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import { indexSponsors, showSponsor } from './services/sponsor'
import { indexListings, showListing } from './services/listing'

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sponsors: []
    }
  }

  componentDidMount = async () => {
    const sponsors = await indexSponsors();
    this.setState({
      sponsors: sponsors,
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.sponsors.map(sponsor =>
          <div key={sponsor.id}>
            <h2>{sponsor.sponsor_name}</h2>
            <p>{sponsor.sponsor_tagline}</p>
          </div>
        )}
      </div>
    )
  }
}

