import React from 'react'
import PropTypes from 'prop-types'

import Center from '@skbkontur/react-ui/Center'
import Button from '@skbkontur/react-ui/Button'

import TransactionFilter from '../common/transactionsFilter'
import { manualReasonNames } from './history/utils/reasons'
import Api from '../../../api'

import styles from '../styles.module.css'

class Unload extends React.Component {
  constructor(props) {
    super(props)

    const now = new Date()
    this.initialDateFrom = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate())
    this.initialDateTo = new Date(now.getFullYear(), now.getMonth(), now.getDate())

    this.state = {
      startTime: this.initialDateFrom,
      finishTime: this.initialDateTo,
      person: null,
      manual: true,
    }
  }

  handleDateFromChange = value => this.setState({ startTime: value })

  handleDateToChange = value => this.setState({ finishTime: value })

  handlePersonChange = value => this.setState({ person: value })

  handleManualChange = value => this.setState({ manual: value })

  addDay(date) {
    return date
      ? new Date(date.getTime() + 24 * 60 * 60 * 1000)
      : date
  }

  generateTransactionsLink() {
    const { person, manual, page } = this.state
    let { startTime, finishTime } = this.state
    
    finishTime = this.addDay(finishTime)
    
    const reasons = manual ? manualReasonNames : null

    return Api.stats.getTransactionsDownloadLink({
      user: person ? person.value : null,
      startDateTime: startTime,
      finishDateTime: finishTime,
      reasons,
    })
  }

  render() {
    const { person, manual } = this.state
    const { getUserFunction } = this.props
    const usersLink = Api.stats.getUsersDownloadLink()
    const transactionsLink = this.generateTransactionsLink()

    return (
      <React.Fragment>
        <div className={styles.content}>
          <div className={styles.description}>Загрузка базы лайков у консультантов</div>
          <Center className={styles.block}>
            <a href={usersLink}>
              <Button icon="Download">
                Скачать
              </Button>
            </a>
          </Center>
        </div>
        <div className={styles.content}>
          <div className={styles.description}>
            Загрузка истории транзакций
          </div>
          <TransactionFilter
            getUserFunction={getUserFunction}
            initialDateFrom={this.initialDateFrom}
            initialDateTo={this.initialDateTo}
            person={person}
            manual={manual}
            onDateFromChange={this.handleDateFromChange}
            onDateToChange={this.handleDateToChange}
            onPersonChange={this.handlePersonChange}
            onManualChange={this.handleManualChange} />
          <Center className={styles.block}>
            <a href={transactionsLink}>
              <Button icon="Download">
                Скачать
              </Button>
            </a>
          </Center>
        </div>
      </React.Fragment>
    )
  }
}

Unload.PropTypes = {
  getUserFunction: PropTypes.func.isRequired
}

export default Unload
