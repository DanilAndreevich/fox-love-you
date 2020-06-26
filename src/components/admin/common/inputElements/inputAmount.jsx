import React from "react";

import CurrencyInput from "@skbkontur/react-ui/CurrencyInput";

class InputAmount extends React.Component {

 render() {
    return (
      <CurrencyInput 
        onChange={this.handleInputChange}
        value={this.props.value}
        fractionDigits={0}
        maxLength={11}
        width={150}
        placeholder={'Количество лайков'}
      />
    )
  }

  handleInputChange = (_, value) => {
    this.props.onChange(value)
  }
}

export default InputAmount
