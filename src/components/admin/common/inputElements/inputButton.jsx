import React from "react"

import Button from "@skbkontur/react-ui/Button"

class InputButton extends React.Component {
  generateText() {
    const prefix = this.props.addition
      ? 'Начислить'
      : 'Списать'
    const suffix = this.props.amount === null
      ? ''
      : ' ' + this.props.amount + ' ❤'
    return prefix + suffix
  }

  render() {
    const text = this.props.loading
      ? 'Отправляем...'
      : this.generateText()

    return (
      <Button
        use="primary"
        onClick={this.props.onClick}
        width={190}
        loading={this.props.loading}
        disabled={this.props.disabled}
      >
        {text}
      </Button>
    )
  }
}

export default InputButton
