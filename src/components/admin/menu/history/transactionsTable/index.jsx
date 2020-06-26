import React from "react"

import Loader from "@skbkontur/react-ui/Loader"
import Button from "@skbkontur/react-ui/Button"
import Icon from "@skbkontur/react-ui/Icon"
import Tooltip from "@skbkontur/react-ui/Tooltip"

import { getReasonName } from '../utils/reasons'
import styles from "../../../styles.module.css"


class TransactionsTable extends React.Component {
  renderMessage(message, onClick, buttonMessage) {
    return (
      <tr>
        <td colSpan={6}>
          <div className={styles.transactionFiller}>
            <div className={styles.transactionsError}>
              {message}
            </div>
            { 
              onClick 
                ? <Button onClick={onClick}>
                    {buttonMessage}
                  </Button>
                : null
            }
          </div>
        </td>
      </tr>
    )
  }

  renderItemsReally(items, users) {
    const getName = user => 
      users
        ? users.has(user)
          ? users.get(user).name
          : ''
        : ''

    const renderDate = date => 
      new Date(date).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      })

    const renderReason = (reason, comment) => {
      const reasonName = getReasonName(reason)
      const commentFragment = comment
        ? <React.Fragment>
            {' '}
            <Tooltip render={() => comment}>
              <Icon name="CommentSolid"/>
            </Tooltip>
          </React.Fragment>
        : null
      return (
        <React.Fragment>
          {reasonName}
          {commentFragment}
        </React.Fragment>
      )
    }
      
    return (
      items.map(item =>
        <tr key={item.transactionId}>
          <td>
            <b>{item.transactionId}</b>
          </td>
          <td>{renderDate(item.transactionDate)}</td>
          <td>{getName(item.user)}</td>
          <td>{item.user}</td>
          <td>{renderReason(item.reason, item.comment)}</td>
          <td>{item.value}</td>
        </tr>
      )
    )
  }

  renderItems(items, users) {
    if (!items) {
      return (
        <tr>
          <td colSpan={6}>
            <div className={styles.transactionFiller} />
          </td>
        </tr>
      )
    }
    if (items.length === 0) {
      return this.renderMessage(
        <React.Fragment>
          ¯\_(ツ)_/¯<br />Нет транзакций, подходящих под фильтры
        </React.Fragment>
      )
    }
    return this.renderItemsReally(items, users)
  }

  render() {
    const { items, loading, error, users } = this.props

    const content = (
      <tbody>
        {
          error 
          ? this.renderMessage(
              <React.Fragment>
                Ошибка при загрузке транзакций :(
                <br />
                {error}
              </React.Fragment>,
              this.props.onRetry,
              'Попробовать ещё раз'
            )
          : this.renderItems(items, users)
        }
      </tbody>
    )

    return (
      <div className={styles.tableDiv + ' '  + styles.block}>
        <Loader active={loading}>
          <table className={styles.adminTable}>
            <thead>
              <tr>
                <th>Номер Транзакции</th>
                <th>Дата начисления</th>
                <th>Получатель</th>
                <th>Логин</th>
                <th>Причина</th>
                <th>Количество</th>
              </tr>
            </thead>
            { content }
          </table>
        </Loader>
      </div>
    );
  }
}

export default TransactionsTable
