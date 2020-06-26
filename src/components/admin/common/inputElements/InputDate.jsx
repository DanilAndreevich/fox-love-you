import React from 'react'

import DatePicker from '@skbkontur/react-ui/DatePicker'

class InputDate extends React.Component {
  constructor(props) {
    super(props)
    const { date, error } = this.validateDate(props.initialDate)
    this.state = {
      value: this.dateToValue(date),
      valid: !error,
      date
    }
  }

  dateToValue(date) {
    if (!date) {
      return ''
    }
    let day = date.getDate().toString(10)
    let month = (date.getMonth() + 1).toString(10)
    const year = date.getFullYear().toString(10)
    if (day.length === 1) {
      day = '0' + day
    }
    if (month.length === 1) {
      month = '0' + month
    }
    return '' +  day + '.' + month + '.' + year
  }

  checkIsDateInPeriod(date) {
    // from 1 Jan 2018 to 31 dec 2099
    const beginDateMs = Date.UTC(2018, 0, 1)
    const endDateMs = Date.UTC(2100, 0, 1)
    const dateMs = date.getTime()
    return dateMs >= beginDateMs && dateMs < endDateMs
  }

  validateDate(date) {
    if (!date) {
      return { date: null, error: false}
    }

    if (!this.checkIsDateInPeriod(date)) {
      return { date: null, error: true }
    }

    return { date, error: false }
  }

  parseDate(value) {
    if (!value) {
      return { date: null, error: false }
    }
    const valid = DatePicker.validate(value)
    if (!valid) {
      return { date: null, error: true }
    }

    const [day, month, year] = value.split('.')
    const date = new Date(year, month - 1, day)
    return this.validateDate(date)
  }

  isDateChanged(date) {
    const currentDate = this.state.date
      ? this.state.date.getTime()
      : this.state.date
    const newDate = date
      ? date.getTime()
      : date
    return currentDate !== newDate
  }

  updateDate = (value) => {
    const { date, error } = this.parseDate(value)
    this.setState({ valid: !error })
    if (error) return
    if (this.isDateChanged(date)) {
      this.setState({ date })
      this.props.onChange(date)
    }
  }

  handleChange = (_, value) => {
    this.setState({
      value
    })
    this.updateDate(value)
  }

  render() {
    return (
      <DatePicker 
        value={this.state.value}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        error={!this.state.valid} />
    )
  }
}

export default InputDate
