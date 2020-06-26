import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './styles.module.css'

const Paragraph = ({ center, children }) => (
  <p className={cn(styles.paragraph, { [styles.center]: center })}>
    {children}
  </p>
)

Paragraph.propTypes = {
  center: PropTypes.bool
}

export default Paragraph
