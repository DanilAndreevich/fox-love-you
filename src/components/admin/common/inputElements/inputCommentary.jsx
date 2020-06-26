import React from "react";

import Input from "@skbkontur/react-ui/Input";

class InputCommentary extends React.Component {

 render() {
    return (
      <Input 
        onChange={this.handleInputChange}
        value={this.props.value ? this.props.value : ''}
        width={250}
        placeholder="Необязательный комментарий"
      />
    )
  }

  handleInputChange = (_, value) => {
    this.props.onChange(value ? value : null)
  }
}

export default InputCommentary
