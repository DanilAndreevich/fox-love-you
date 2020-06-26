import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import Link from '@skbkontur/react-ui/Link'

import Section from './../section'
import Caption from './../caption'
import Paragraph from './../paragraph'
import InputSearch from './inputSearch'
import styles from './styles.module.css'

class Search extends React.Component {
  onSearchChange = (event, value) => {
    this.props.onChange(value)
  }
  
  render() {
    const { value, onSearch, showSeeAllLink } = this.props;
    return (
      <Section className={styles.section} anchorId="search">
        <Caption>
          Найти показатели
        </Caption>
        <Paragraph center={true}>
          Можно посмотреть количество своих лайков и лайков коллег. Просто введи фамилию и имя
        </Paragraph>
        <InputSearch
          value={value}
          onChange={this.onSearchChange}
          onSearch={onSearch}
        />
        {
          showSeeAllLink
            ? <RouterLink to="/search" className={styles.link}>
                <Link>Смотреть все</Link>
              </RouterLink>
            : null
        }
      </Section>
    )
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  showSeeAllLink: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default Search
