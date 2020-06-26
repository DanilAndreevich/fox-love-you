import React from 'react'

import ComboBox from '@skbkontur/react-ui/ComboBox'

import styles from '../../styles.module.css'

class InputPersons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foundUsersCount: null
    }
  }

  getItems = query => 
    this.props.getUserFunction(query)
      .then(users => {
        this.setState({ foundUsersCount: users.size })
        return Array
          .from(users.entries())
          .slice(0, 20)
          .map(([value, { name: label }]) =>
            ({ value, label }))
      })

  renderItem(item) {
    return (
      <div className={styles.inputPersonItem}>
        {item.label}
        <div className={styles.inputPersonSpace} />
        {item.value}
      </div>
    )
  }

  renderTotalCount(foundCount, totalCount) {
    return foundCount < totalCount
      ? <span>Показано {foundCount} из {totalCount} найденных.</span>
      : null
  }

  handleChange = (_, value) => {
    this.props.onChange(value)
  }

  handleUnexpectedInput = () => {
    this.props.onChange(null)
  }

  render() {
    return (
      <ComboBox
        getItems={this.getItems}
        autocomplete={true}
        width={250}
        renderItem={this.renderItem}
        totalCount={this.state.foundUsersCount}
        renderTotalCount={this.renderTotalCount}
        placeholder="Начните вводить имя консультанта"
        onUnexpectedInput={this.handleUnexpectedInput}
        value={this.props.value}
        onChange={this.handleChange}
      />
    )
  }
}

export default InputPersons
