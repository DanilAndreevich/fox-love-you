import React from 'react'
import { tracker } from 'km-tracker'

import Toast from '@skbkontur/react-ui/Toast'
import Tabs from '@skbkontur/react-ui/Tabs'
import Center from '@skbkontur/react-ui/Center'

import Unload from './menu/Unload'
import History from './menu/History'
import Api from '../../api'

import styles from './styles.module.css'

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.getUserFunction = this.createGetUserFunction()
    this.state = {
      active: 'tab1',
      users: null
    }
  }

  // Creates a function that takes query and returns a promise,
  // that returns a Map of kind: 
  // login -> { name, balance, avatarUri, isBigFox }

  createGetUserFunction() {
    const getUsersPromise = Api.users
      .getAll()
      .then(result =>
        this.setState({
          users: result
        }))
      .catch(() => {
        this.setState({
          users: null
        })
        this.pushErrorToast()
      })

    return query => getUsersPromise
      .then(() => {
        const { users } = this.state
        if (users === null) {
          this.getUserFunction = this.createGetUserFunction()
        } else {
          const filteredUsers = new Map()
          for (let user of users) {
            let [login, { name }] = user
            login = login.toLowerCase()
            name = name.toLowerCase()
            query = query.toLowerCase()
            if (name.includes(query) || login.includes(query)) {
              filteredUsers.set(user[0], user[1])
            }
          }
          return filteredUsers
        }
      })
      .catch(() => {
        this.getUserFunction = this.createGetUserFunction()
      })
  }

  componentDidMount() {
    tracker.trackEvent('common', 'pageLoaded', 'admin')
  }

  pushErrorToast() {
    Toast.push('Ошибка при загрузке пользователей :(', {
      label: 'Попробовать ещё раз',
      handler: () => this.getUserFunction = this.createGetUserFunction()
    })
  }

  tabContent = id => {
    switch (id) {
      case 'tab1': {
        return (
          <History 
            getUserFunction={this.getUserFunction}
            users={this.state.users} />
        )
      }
      case 'tab2': {
        return (
          <Unload getUserFunction={this.getUserFunction} />
        )
      }
    }
  }

  render() {
    const { active } = this.state;
    const tabContent = this.tabContent(active);
    return (
      <React.Fragment>
        <div className={styles.tabs}>
          <Center>
            <Tabs
              value={this.state.active}
              onChange={(_, v) => this.setState({ active: v })}
            >
              <Tabs.Tab id="tab1">Добавление и история транзакций</Tabs.Tab>
              <Tabs.Tab id="tab2">Выгрузка</Tabs.Tab>
            </Tabs>
          </Center>
        </div>
        {tabContent}
      </React.Fragment>
    )
  }
}
export default Content