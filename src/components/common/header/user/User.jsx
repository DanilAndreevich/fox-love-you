import React from 'react'
import cn from 'classnames'

import Icon from '@skbkontur/react-ui/Icon'

import Api from '../../../../api'
import styles from './styles.module.css'

class User extends React.Component {
  renderNormalState() {
    const { name, balance } = this.props

    return (
      <React.Fragment>
        <div className={styles.box}>
          {name}
          { 
            balance
            ? <React.Fragment>
                  <div className={styles.divider} />
                  <span className={styles.balance}>
                    {`${balance}\xa0❤`}
                  </span>
                </React.Fragment>
              : null
            }
          
        </div>
        <a
          className={cn(styles.box, styles.button)}
          href={Api.users.getLogoutLink()}
        >
          <Icon name='Logout' />
        </a>
      </React.Fragment>
    )
  }

  renderLoadingState() {
    return (
      <div className={styles.box}>
        Загрузка...
      </div>
    )
  }

  renderErrorState() {
    const { onFetchUserData } = this.props

    return (
      <button onClick={onFetchUserData} className={cn(styles.box, styles.button)}>
        Ошибка при получении данных
      </button>
    )
  }

  render() {
    const { state } = this.props

    let content
    if (state === 0) {
      content = this.renderLoadingState()
    } else if (state === 1) {
      content = this.renderNormalState()
    } else if (state === 2) {
      content = this.renderErrorState()
    }

    return (
      <div className={styles.container}>
        {content}
      </div>
    )
  }
}

export default User
