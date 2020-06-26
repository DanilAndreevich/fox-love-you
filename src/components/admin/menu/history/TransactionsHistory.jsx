import React from 'react'

import Paging from '../../../common/paging'

import TransactionsTable from './transactionsTable'
import styles from '../../styles.module.css'

import TransactionFilter from '../../common/transactionsFilter'

class TransactionHistory extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      users,
      getUserFunction,
      transactions,
      transactionsError,
      transactionsLoading,
      initialDateFrom,
      initialDateTo,
      person,
      manual,
      onDateFromChange,
      onDateToChange,
      onPersonChange,
      onManualChange,
      onRetry,
      page,
      totalPages,
      onPageChange
    } = this.props

    return (
      <div className={styles.content}>
        <div className={styles.description}>
          История транзакций
        </div>
        <TransactionFilter 
          getUserFunction={getUserFunction}
          initialDateFrom={initialDateFrom}
          initialDateTo={initialDateTo}
          person={person}
          manual={manual}
          onDateFromChange={onDateFromChange}
          onDateToChange={onDateToChange}
          onPersonChange={onPersonChange}
          onManualChange={onManualChange} />
        <TransactionsTable
          items={transactions}
          loading={transactionsLoading}
          onRetry={onRetry}
          users={users}
          error={transactionsError} />
        <Paging
          page={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    )
  }
}

export default TransactionHistory
