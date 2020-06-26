import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'

import logoPic from './image/group-2.png'
import UserContext from '../UserContext'
import User from './user/User'
import styles from './styles.module.css'

const mailLikes = 'mailto:likes@kontur.ru'

function renderLandingLinks(isBigFox) {
  return (
    <React.Fragment>
      <a className={styles.link} href="#motivation">О программе</a>
      <a className={styles.link} href="#table">Как считается</a>
      <a className={styles.link} href="#search">Найти показатели</a>
      <a className={styles.link} href="#trade">Вознаграждения</a>
      {
        isBigFox
          ? <RouterLink className={styles.link} to='/admin'>Админка</RouterLink>
          : null
      }
      <a className={styles.link + ' ' + styles.mail} href={mailLikes}>Напишите нам</a>
    </React.Fragment>
  )
}

function renderLogo() {
  return (
    <RouterLink to='/' className={styles.logoLink}>
      <img src={logoPic} className={styles.logo} alt="Лиса любит тебя"/>
    </RouterLink>
  )
}

const MenuSticky = ({ isBigFox, landing }) => (
  <div className={styles.menu}>
    {landing ? renderLandingLinks(isBigFox) : renderLogo()}
    <UserContext.Consumer>
      {({ name, balance, state, fetchUserData }) => {
        return (
          <User
            name={name}
            balance={balance}
            state={state}
            onFetchUserData={fetchUserData}
          />
        )
      }}
    </UserContext.Consumer>
  </div>
)

MenuSticky.propTypes = {
  isBigFox: PropTypes.bool.isRequired,
  landing: PropTypes.bool.isRequired
}

export default MenuSticky
