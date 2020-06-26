import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Loader from '@skbkontur/react-ui/Loader'
import Link from '@skbkontur/react-ui/Link'
import Paging from '../../../common/paging'

import Caption from '../../../common/caption'
import Section from '../../../common/section'
import styles from './styles.module.css'

class Content extends Component {
  renderError() {
    const { error } = this.props
    return (
      <React.Fragment>
        <p className={styles.meme}>┬┴┬┴┤( ͡° ͜ʖ├┬┴┬┴ </p>
        <p className={styles.textMeme}>
          Из-за угла появляется ошибка и говорит: {error.message}
        </p>
        <p className={styles.textMeme}>
          Пора обращаться к{' '}
          <Link href="mailto:likes@kontur.ru?subject=Check%20this%20out!%20Search%20page%20error">
            @дминистратору
            </Link>
        </p>
      </React.Fragment>
    )
  }

  renderNoItems() {
    return (
      <React.Fragment>
        <p className={styles.meme}>٩(๏̯๏)۶</p>
        <p className={styles.textMeme}>По запросу ничего не найдено</p>
      </React.Fragment>
    )
  }

  renderItems() {
    const { items, top, page, totalPages, onPageChange } = this.props
    return (
      <Section className={styles.results}>
        <Caption>
          {
            top
              ? 'Лидеры по показателям'
              : 'Результаты поиска'
          }
        </Caption>
        { 
          items.map(item => (
            <div className={styles.result} key={item.login}>
              <img
                src={item.avatarUri}
                alt="avatar"
                className={styles.photo}
                />
              <span>
                {item.name}
              </span>
              <div className={styles.balance}>
                {`${item.balance}\xa0❤`}
              </div>
            </div>
          ))
        }
        <Paging
          page={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </Section>
    )
  }

  renderContent() {
    const { error, items } = this.props
    if (error) {
      return this.renderError()
    } else if (!items.length) {
      return this.renderNoItems()
    } else {
      return this.renderItems()
    }
  }

  render() {
    const { isLoaded, items } = this.props
    return (
      <Loader active={!isLoaded} className={styles.container}>
          {!isLoaded && !items.length ? null : this.renderContent()}
      </Loader>
    )
  }
}

Content.propTypes = {
  items: PropTypes.arrayOf(String).isRequired,
  top: PropTypes.bool.isRequired,
  error: PropTypes.any,
  isLoaded: PropTypes.bool,
  page: PropTypes.number,
  totalPages: PropTypes.oneOf(PropTypes.null, PropTypes.number),
  onPageChange: PropTypes.func
}

export default Content
