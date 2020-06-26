import React from 'react'
import { tracker } from 'km-tracker'

import Header from '../common/header'
import SearchSection from './searchSection'
import Footer from '../common/footer'
import Container from '../common/container'
import UserContext from '../common/UserContext'

class SearchPage extends React.Component {
  componentDidMount() {
    tracker.trackEvent('common', 'pageLoaded', 'search')
  }

  render () {
    return (
      <Container>
        <UserContext.Consumer>
          {({ isBigFox }) => <Header isBigFox={isBigFox} landing={false} />}
        </UserContext.Consumer>
        <SearchSection />
        <Footer />
      </Container>
    )
  }
}

export default SearchPage
