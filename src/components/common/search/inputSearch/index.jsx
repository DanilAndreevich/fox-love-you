import React from 'react'
import PropTypes from 'prop-types'

import Input from '@skbkontur/react-ui/Input'
import Icon from '@skbkontur/react-ui/Icon'
import Button from '@skbkontur/react-ui/Button'

import styles from './styles.module.css'

class InputSearch extends React.Component {
  onSearchPress = e => {
    if (e.key === 'Enter') {
      this.props.onSearch()
    }
  }

  render() {
    const { onChange, onSearch, value } = this.props
    return (
      <div className={styles.container}>
        <Input
          leftIcon={<Icon name="search" />}
          value={value}
          width="100%"
          placeholder="Введите фамилию и имя"
          onChange={onChange}
          onKeyPress={this.onSearchPress}
          size="large"
        />
        <div className={styles.gap} />
        <Button
          use="primary"
          onClick={onSearch}
          width={160}
          size="large"
        >
          Найти
        </Button>
      </div>
    )
  }
}

InputSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default InputSearch
