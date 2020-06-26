import React from 'react'
import { withRouter } from 'react-router'

import Api from '../../../api'
import Content from './contentSection'
import Search from '../../common/search'

const usersPerPage = 20

class SearchSection extends React.Component {
  constructor(props) {
    super(props)
    const { state } = props.location;
    const searchValue = state && state.searchValue ? state.searchValue : ''
    this.needsUpdate = false

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      searchValue,
      top: !searchValue,
      page: 0,
      totalPages: null
    }
  }

  componentDidMount() {
    this.updateSearchResults()
  }

  componentDidUpdate() {
    if (this.needsUpdate) {
      this.needsUpdate = false
      this.updateSearchResults()
    }
  }

  updateSearchResults() {
    const { page } = this.state
    let { searchValue } = this.state
    searchValue = searchValue ? searchValue : null
    const top = !searchValue
    Api.users
      .search(searchValue, usersPerPage, page * usersPerPage)
      .then(
        ({ total, users }) => {
          this.setState({
            isLoaded: true,
            items: users,
            error: false,
            top,
            page,
            totalPages: Math.ceil(total / usersPerPage)
          })
        },
        error => {
          this.setState({
            isLoaded: true,
            items: [],
            error,
            top,
            totalPages: null
          })
        }
      )
  }

  handleSearch = () => {
    this.setState({
      page: 0,
      isLoaded: false
    })
    this.needsUpdate = true
  }

  handlePageChange = page => {
    this.setState({
      page,
      isLoaded: false
    })
    this.needsUpdate = true
  }

  onSearchChange = searchValue => {
    this.setState({ searchValue })
  }

  render() {
    const { items, error, isLoaded, searchValue, top, page, totalPages } = this.state
    return (
      <React.Fragment>
        <Search
          onSearch={this.handleSearch}
          onChange={this.onSearchChange}
          value={searchValue}
        />
        <Content
          error={error}
          isLoaded={isLoaded}
          items={items}
          searchValue={searchValue}
          top={top}
          page={page}
          totalPages={totalPages}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    )
  }
}

export default withRouter(SearchSection)
