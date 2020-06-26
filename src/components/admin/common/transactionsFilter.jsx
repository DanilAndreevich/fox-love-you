import React from 'react'
import PropTypes from 'prop-types'

import Center from '@skbkontur/react-ui/Center'
import Checkbox from '@skbkontur/react-ui/Checkbox'
import Gapped from '@skbkontur/react-ui/Gapped'

import InputDate from './inputElements/InputDate'
import InputPersons from './inputElements/inputPersons'

import styles from '../styles.module.css'

class TransactionFilter extends React.Component {
  handleManualChange = (_, value) => {
    this.props.onManualChange(value)
  }

  render() {
    const {
      getUserFunction,
      initialDateFrom,
      initialDateTo,
      person,
      manual,
      onDateFromChange,
      onDateToChange,
      onPersonChange
    } = this.props

    return (
      <Center className={styles.block}>
        <Gapped gap={20}>
          От:
          <InputDate
            initialDate={initialDateFrom}
            onChange={onDateFromChange} />
          До:
          <InputDate
            initialDate={initialDateTo}
            onChange={onDateToChange} />
          Получатель:
          <InputPersons
            getUserFunction={getUserFunction}
            onChange={onPersonChange}
            value={person} />
          <Checkbox 
            checked={manual}
            onChange={this.handleManualChange}
          >
            Показывать только ручные транзакции
          </Checkbox>
        </Gapped>
      </Center>
    )
  }
}

TransactionFilter.propTypes = {
  getUserFunction: PropTypes.func.isRequired,
  initialDateFrom: PropTypes.instanceOf(Date).isRequired,
  initialDateTo: PropTypes.instanceOf(Date).isRequired,
  person: PropTypes.object.isRequired,
  manual: PropTypes.bool.isRequired,
  onDateFromChange: PropTypes.func.isRequired,
  onDateToChange: PropTypes.func.isRequired,
  onPersonChange: PropTypes.func.isRequired,
  onManualChange: PropTypes.func.isRequired,
}

export default TransactionFilter
