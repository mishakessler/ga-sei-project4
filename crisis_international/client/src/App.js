// React
import React, { Component } from 'react'
import {
  Link,
  Route,
  withRouter,
  Switch,
  Redirect
} from 'react-router-dom';

// Pages
import Landing from './pages/Landing'
import Directory from './pages/Directory'
import Listings from './pages/Listings'
import Sponsors from './pages/Sponsors'
import About from './pages/About'
import Contact from './pages/Contact'

// Components
import Listing from './pages/Listing'
import Sponsor from './pages/Sponsor'
import Disclaimer from './components/Disclaimer'

// Forms
import LoginForm from './components/forms/LoginForm'

// API Functions
import {
  indexSponsors,
} from './services/sponsor'

import {
  indexListings,
} from './services/listing'

// Stylesheet
import './App.css';

// Assets
import Logo from './assets/graphics/CI-Wordmark-Keppel.png'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sponsors: [],
      listings: [],
    }
  }

  componentDidMount = async () => {
    const listings = await indexListings();
    const sponsors = await indexSponsors();
    this.setState({
      sponsors: sponsors,
      listings: listings,
    })
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
            <Link to="/resources">Resources</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/resources">Add Resource</Link>
          </div>
        </div>

        <div className="body">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/directory" render={() =>
              <Directory
                listings={this.state.listings}
                sponsors={this.state.sponsors}
              />}
            />
            <Route exact path="/sponsors" render={() =>
              <Sponsors sponsors={this.state.sponsors}
              />}
            />
            <Route path="/sponsors/:id" render={() => <Sponsor />} />
            <Route exact path="/resources" render={() =>
              <Listings
                listings={this.state.listings}
              />}
            />
            <Route path="/resources/:id" render={() => <Listing />} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path='/*' render={() => <Redirect to='/' />} />
          </Switch>
        </div>

        <div className="footer">
          <div className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/directory">Directory</Link>
            <Link to="/sponsors">Sponsors</Link>
            <Link to="/resources">Resources</Link>
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