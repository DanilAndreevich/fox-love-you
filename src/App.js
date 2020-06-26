import 'core-js/shim'
import 'react-app-polyfill/ie9'
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { tracker } from 'km-tracker'

import Landing from './components/landing'
import Search from './components/search'
import Admin from './components/admin'
import UserContext, { defaultValue as defaultUserContextValue } from './components/common/UserContext'
import Api from './api'

class App extends Component {
  constructor(props) {
    super(props)
    this.initializeTracker()
    this.state = {
      userContextValue: {
        ...defaultUserContextValue,
        fetchUserData: this.fetchUserData
      }
    }
  }

  fetchUserData = () => {
    this.setState({
      userContextValue: {
        ...this.state.userContextValue,
        isBigFox: null,
        name: null,
        avatarUri: null,
        balance: null,
        login: null,
        state: 0
      }
    })
    Api.users
      .me()
      .then(({
        isBigFox = null,
        name = null,
        avatarUri = null,
        balance = null,
        login = null
      }) => {
        this.setState({
          userContextValue: {
            ...this.state.userContextValue,
            isBigFox,
            name,
            avatarUri,
            balance,
            login,
            state: 1
          }
        })
      }, () => {
        this.setState({
          userContextValue: {
            ...this.state.userContextValue,
            isBigFox: null,
            name: null,
            avatarUri: null,
            balance: null,
            login: null,
            state: 2
          }
        })
      })
  }

  initializeTracker() {
    const trackerENV = window.location.hostname === 'fly.kontur.ru'
      ? 'prod'
      : 'test'
    tracker.initialize({
      siteID: 42,
      trackerENV
    });
  }

  componentDidMount() {
    this.fetchUserData()
    tracker.trackEvent('common', 'appLoaded')
  }

  render() {
    return (
      <UserContext.Provider value={this.state.userContextValue}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/search" component={Search} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </BrowserRouter>
      </UserContext.Provider>
    )
  }
}

export default App
