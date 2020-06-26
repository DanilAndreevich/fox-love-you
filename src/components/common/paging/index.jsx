import React from 'react'
import PropTypes from 'prop-types'

import ReactPaging from '@skbkontur/react-ui/Paging'
import Center from '@skbkontur/react-ui/Center'

import styles from './styles.module.css'

class Paging extends React.Component {
  handlePageChange = page => this.props.onPageChange(page - 1)

  render() {
    const { page, totalPages } = this.props

    if (totalPages === null || totalPages === 0 || totalPages === 1) {
      return null
    }

    return (
      <Center className={styles.container}>
        <ReactPaging
          activePage={page + 1}
          pagesCount={totalPages}
          onPageChange={this.handlePageChange}
        />
      </Center>
    )
  }
}

Paging.propTypes = {
  page: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  totalPages: PropTypes.oneOf(PropTypes.number, null).isRequired
}

export default Paging
