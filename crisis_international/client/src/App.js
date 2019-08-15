import React, { Component } from 'react'
import { Link, Route, withRouter } from 'react-router-dom';

// Pages
import Landing from './pages/Landing'
import Directory from './pages/Directory'
import Listings from './pages/Listings'
import Sponsors from './pages/Sponsors'
import About from './pages/About'
import Contact from './pages/Contact'

// Components
import Hero from './components/Hero'
import Subheader from './components/Subheader'
import Listing from './pages/Listing'
import Sponsor from './pages/Sponsor'
import Disclaimer from './components/Disclaimer'

// Forms
import CreateListingForm from './components/forms/CreateListingForm'
import CreateSposorForm from './components/forms/CreateSponsorForm'
import EditListingForm from './components/forms/EditListingForm'
import EditSponsorForm from './components/forms/EditSponsorForm'
import LoginForm from './components/forms/LoginForm'

// API Functions
import {
  createSponsor,
  indexSponsors,
  showSponsor,
  updateSponsor,
  destroySponsor,
} from './services/sponsor'

import {
  createListing,
  indexListings,
  showListing,
  updateListing,
  destroyListing
} from './services/listing'

// Stylesheet
import './App.css';

// Assets
import Logo from './assets/graphics/CI-Wordmark-White.png'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <div className="header-logo">
            <Link to="/"><img src={Logo}></img></Link>
          </div>
          <div className="header-nav">
            <Link to="/">Home</Link>
            <Link to="/directory">Directory</Link>
            <Link to="/sponsors">Sponsors</Link>
            <Link to="/listings">Resources</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="body">
          <Route path="/" exact render={() => <Landing />} />
          <Route path="/directory" render={() => <Directory />} />
          <Route path="/listings" render={() => <Listings />} />
          <Route path="/sponsors" render={() => <Sponsors />} />
          <Route path="/about" render={() => <About />} />
          <Route path="/contact" render={() => <Contact />} />
        </div>

        <div className="footer">
          <div className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/directory">Directory</Link>
            <Link to="/sponsors">Sponsors</Link>
            <Link to="/listings">Resources</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-info">
            <p>Crisis International was conceived, designed, and developed by Misha Kessler.</p>
          </div>
          <div className="footer-socials">

          </div>
          <div className="footer-disclaimer">
            <p>Use of the Crisis International website is bound by the Terms of Use as defined by the <a href="https://beta.crisisinternational.org/trust" target="_blank">Crisis International <em>Trust & Transparency</em> documents</a>.</p>
          </div>
        </div>
      </div >
    )
  }
}


export default withRouter(App)