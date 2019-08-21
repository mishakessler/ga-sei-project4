// React
import React, { Component } from 'react'

// React Router
import {
  Link,
  Route,
  withRouter,
  Switch,
  Redirect
} from 'react-router-dom';

// React Semantic
import {
  Dropdown,
  DropdownMenu,
  Icon,
  Button,
} from 'semantic-ui-react'

// Pages
import Landing from './pages/Landing'
import Directory from './pages/Directory'
import Listings from './pages/Listings'
import Sponsors from './pages/Sponsors'
import Articles from './pages/Articles'

// Components
import Listing from './pages/Listing'
import Sponsor from './pages/Sponsor'

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
import Logo from './assets/graphics/CI-Wordmark-Enterprise.png'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sponsors: [],
      listings: [],
      menuDiv: false,
      menuButton: true,
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

  showMenu = () => {
    this.setState({
      menuDiv: true,
      menuButton: false,
    })
  }

  hideMenu = () => {
    this.setState({
      menuDiv: false,
      menuButton: true,
    })
  }

  render() {
    return (
      <div className="app">
        <div className="page-header">
          <div className="header-logo">
            <Link to="/"><img src={Logo}></img></Link>
          </div>
          <div className="desktop-nav">
            <Link to="/resources" className="smooth">Resources</Link>
            <Link to="/articles" className="smooth">Articles</Link>
            <Link to="/sponsors" className="smooth">Sponsors</Link>
            <Link to="/directory" className="smooth">Directory</Link>
            <Link to="/" className="cta smooth">Dashboard</Link>
          </div>
          <div className="mobile-nav">
            {!this.state.menuDiv &&
              <Button
                icon
                cyan
                massive
                inverted
                onClick={this.showMenu}
                className="hamburger-icon">
                <Icon name="bars" />
              </Button>
            }
            {this.state.menuDiv &&
              <div className="mobile-menu">
                <Button
                  icon
                  cyan
                  massive
                  inverted
                  onClick={this.hideMenu}
                  className="hamburger-icon" >
                  <Icon name="ellipsis vertical" />
                </Button>
                <Link to="/resources" className="smooth">Resources</Link>
                <Link to="/articles" className="smooth">Articles</Link>
                <Link to="/sponsors" className="smooth">Sponsors</Link>
                <Link to="/directory" className="smooth">Directory</Link>
                <Link to="/" className="cta smooth">Dashboard</Link>
              </div>
            }
          </div>
        </div >

        <div className="body">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/resources" render={() =>
              <Listings listings={this.state.listings} />} />
            <Route path="/resources/:id" render={() =>
              <Listing />} />
            <Route path="/articles" render={() =>
              <Articles />} />
            <Route exact path="/sponsors" render={() =>
              <Sponsors sponsors={this.state.sponsors} />} />
            <Route path="/sponsors/:id" render={() =>
              <Sponsor />} />
            <Route path="/directory" render={() =>
              <Directory sponsors={this.state.sponsors} />} />
            <Route path='/*' render={() =>
              <Redirect to='/' />} />
          </Switch>
        </div>

        <div className="footer">
          <div className="footer-nav">
            <Link to="/" className="smooth">Home</Link>
            <Link to="/resources" className="smooth">Resources</Link>
            <Link to="/articles" className="smooth">Articles</Link>
            <Link to="/sponsors" className="smooth">Sponsors</Link>
            <Link to="/directory" className="smooth">Directory</Link>
            <Link to="https://beta.crisisinternational.org/about" className="smooth" target="_blank">About</Link>
            <Link to="https://beta.crisisinternational.org/news" className="smooth" target="_blank">News</Link>
            <Link to="https://beta.crisisinternational.org/contact" className="smooth" target="_blank">Contact</Link>
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