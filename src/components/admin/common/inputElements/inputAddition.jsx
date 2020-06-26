import React from "react"

import Switcher from "@skbkontur/react-ui/Switcher"

const items = ['Начисление', 'Списание']

class InputAddition extends React.Component {
  render() {
    const value = items[this.props.value ? 0 : 1]

    return (
      <Switcher
        onChange={this.handleChange}
        value={value}
        items={items}
        width={190}
      />
    )
  }

  handleChange = (_, value) => {
    this.props.onChange(value === items[0])
  }
}

export default InputAddition
