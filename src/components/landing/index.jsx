import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { tracker } from 'km-tracker'

import Footer from '../common/footer'
import Feedback from './feedback'
import Motivation from './motivation'
import Space from './space'
import Table from './table'
import Search from '../common/search'
import Trade from './trade'
import Container from '../common/container'
import Header from '../common/header'
import UserContext from '../common/UserContext'
import Welcome from './welcome'

class LandingPage extends Component {
  state = {
    searchValue: ''
  }

  componentDidMount() {
    tracker.trackEvent('common', 'pageLoaded', 'main')
  }

  handleSearch = () => {
    this.props.history.push({
      pathname: '/search',
      state: { searchValue: this.state.searchValue }
    })
  }

  handleSearchChange = value => {
    this.setState({
      searchValue: value
    })
  }

  render() {
    return (
      <Container>
        <UserContext.Consumer>
          {({ isBigFox }) => <Header isBigFox={isBigFox} landing={true} />}
        </UserContext.Consumer>
        <Welcome />
        <Motivation />
        <Space />
        <Table />
        <Search
          onSearch={this.handleSearch}
          showSeeAllLink={true}
          onChange={this.handleSearchChange}
          value={this.state.value}
        />
        <Trade />
        <Feedback />
        <Footer />
      </Container>
    )
  }
}

export default withRouter(LandingPage)
