import React from 'react'
import PropTypes from 'prop-types'

import TransactionsHistory from './history/TransactionsHistory'
import AddTransaction from './history/AddTransaction'
import Api from '../../../api'
import { manualReasonNames } from './history/utils/reasons'

const transactionsPerPage = 15

class History extends React.Component {
  constructor(props) {
    super(props)

    this.needsUpdate = false

    const now = new Date()
    this.initialDateFrom = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate())
    this.initialDateTo = new Date(now.getFullYear(), now.getMonth(), now.getDate())

    this.state = {
      transactions: null,
      transactionsLoading: true,
      transactionsError: null,
      totalPages: null,
      page: 0,
      startTime: this.initialDateFrom,
      finishTime: this.initialDateTo,
      person: null,
      manual: true,
    }
  }

  updateTransactions = () => {
    const { person, manual, page } = this.state
    let { startTime, finishTime } = this.state
    
    finishTime = this.addDay(finishTime)
    
    const reasons = manual ? manualReasonNames : null

    Api.transactions
      .get({ 
        user: person ? person.value : null,
        startDateTime: startTime,
        finishDateTime: finishTime,
        reasons,
        count: transactionsPerPage,
        offset: page * transactionsPerPage
      })
      .then(({ total, transactions }) => {
        this.setState({
          transactions,
          transactionsLoading: false,
          transactionsError: null,
          page,
          totalPages: Math.ceil(total / transactionsPerPage)
        })
      })
      .catch(error => {
        this.setState({
          transactionsLoading: false,
          transactionsError: String(error),
          totalPages: null
        })
      })
  }

  componentDidMount() {
    this.updateTransactions()
  }

  componentDidUpdate() {
    if (this.needsUpdate) {
      this.needsUpdate = false
      this.updateTransactions()
    }
  }
  
  addDay(date) {
    return date
      ? new Date(date.getTime() + 24 * 60 * 60 * 1000)
      : date
  }

  refreshTransactions = () => {
    this.needsUpdate = true
    this.setState({
      transactionsLoading: true
    })
  }

  handlePageChange = page => {
    this.setState({ page })
    this.refreshTransactions()
  }

  handleParametersChange = params => {
    this.setState({
      ...params,
      page: 0
    })
    this.refreshTransactions()
  }

  handleDateFromChange = value => this.handleParametersChange({ startTime: value })

  handleDateToChange = value => this.handleParametersChange({ finishTime: value })

  handlePersonChange = value => this.handleParametersChange({ person: value })

  handleManualChange = value => this.handleParametersChange({ manual: value })

  render() {
    const {
      users,
      getUserFunction
    } = this.props

    const {
      transactions,
      transactionsError,
      transactionsLoading,
      person,
      manual,
      page,
      totalPages
    } = this.state

    return (
      <React.Fragment>
        <AddTransaction 
          getUserFunction={getUserFunction}
          onSendTransaction={this.refreshTransactions} />
        <TransactionsHistory 
          users={users}
          getUserFunction={getUserFunction} 
          transactions={transactions}
          transactionsError={transactionsError}
          transactionsLoading={transactionsLoading}
          initialDateFrom={this.initialDateFrom}
          initialDateTo={this.initialDateTo}
          person={person}
          manual={manual}
          onDateFromChange={this.handleDateFromChange}
          onDateToChange={this.handleDateToChange}
          onPersonChange={this.handlePersonChange}
          onManualChange={this.handleManualChange}
          onRetry={this.refreshTransactions}
          page={page}
          totalPages={totalPages}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    )
  }
}

History.propTypes = {
  getUserFunction: PropTypes.func.isRequired,
  users: PropTypes.instanceOf(Map).isRequired,
}

export default History
