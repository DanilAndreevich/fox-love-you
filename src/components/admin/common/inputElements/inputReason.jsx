import React from "react"

import Select from "@skbkontur/react-ui/Select"

import { additionReasons, subtractionReasons } from '../../menu/history/utils/reasons'

class InputReason extends React.Component {
  render() {
    const items = this.props.addition
      ? additionReasons
      : subtractionReasons

    return (
      <Select
        placeholder="Выберите причину"
        onChange={this.handleChange}
        value={this.props.value}
        items={items}
        width={190}
      />
    )
  }

  handleChange = (_, value) => {
    this.props.onChange(value)
  }
}

export default InputReason;