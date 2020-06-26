import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const Section = ({ className, children, anchorId }) => (
  <section className={styles.section + ' ' + className} id={anchorId}>
    {children}
  </section>
)

Section.propTypes = {
  className: PropTypes.string.isRequired,
  anchorId: PropTypes.string.isRequired
}

export default Section
