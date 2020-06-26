import React from "react"

import Center from "@skbkontur/react-ui/Center"
import Gapped from "@skbkontur/react-ui/Gapped"
import Toast from "@skbkontur/react-ui/Toast"

import InputAddition from "../../common/inputElements/inputAddition"
import InputPersons from "../../common/inputElements/inputPersons"
import InputReason from "../../common/inputElements/inputReason"
import InputAmount from "../../common/inputElements/inputAmount"
import InputCommentary from "../../common/inputElements/inputCommentary"
import InputButton from "../../common/inputElements/inputButton"

import Api from "../../../../api"
import styles from "../../styles.module.css"

class AddTransaction extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      addition: true,
      person: null,
      reason: null,
      amount: null,
      comment: null,
      loading: false
    }
  }  

  render() {
    const { addition, person, reason, amount, comment, loading } = this.state

    return (
      <div className={styles.content}>
        <div className={styles.description}>
          Начисление лайков
        </div>
        <Center className={styles.block}>
          <Gapped gap={20}>
            <InputAddition
              value={addition}
              onChange={this.handleAdditionChange} />
            <InputPersons 
              getUserFunction={this.props.getUserFunction}
              onChange={this.handlePersonChange}
              value={person} />
            <InputReason
              value={reason}
              onChange={this.handleReasonChange}
              addition={addition} />
            <InputAmount 
              value={amount}
              onChange={this.handleAmountChange} />
            <InputCommentary
              value={comment}
              onChange={this.handleCommentaryChange} />
            <InputButton
              amount={amount}
              disabled={this.isButtonDisabled()}
              onClick={this.handleButtonClick}
              loading={loading}
              addition={addition} />
          </Gapped>
        </Center>
      </div>
    )
  }

  isButtonDisabled() {
    const { loading } = this.state
    const allFieldsAreFilled =
      this.state.person !== null &&
      this.state.reason !== null &&
      this.state.amount !== null &&
      this.state.amount >= 1
    const enabled = allFieldsAreFilled && !loading
    return !enabled
  }

  handleAdditionChange = (addition) => {
    this.setState({
      addition,
      reason: null
    })
  }

  handlePersonChange = (person) => {
    this.setState({
      person
    })
  }

  handleReasonChange = (reason) => {
    this.setState({
      reason
    })
  }

  handleAmountChange = (amount) => {
    this.setState({
      amount
    })
  }

  handleCommentaryChange = (value) => {
    this.setState({
      comment: value
    })
  }

  handleButtonClick = () => {
    // todo добавить передачу параметров транзакции в onSendTransaction
    // отправляем транзакцию
    // обновляем history
    // 
    const { reason, person: { value: user }, amount, comment, addition } = this.state
    const { onSendTransaction } = this.props
    const sign = addition ? 1 : -1
    const value = amount * sign
    
    this.setState({
      loading: true
    })

    Api.transactions
      .add(reason, user, value, comment)
      .then(res => {
        this.setState({
          loading: false
        })
        Toast.push('Транзакция добавлена')
        onSendTransaction()
      })
      .catch(res => {
        this.setState({
          loading: false
        })
        Toast.push('Не получилось добавить транзакцию :(')
      })
  }
}

export default AddTransaction;
