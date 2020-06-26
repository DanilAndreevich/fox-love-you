import React from 'react'

import styles from './styles.module.css'

const Caption = ({ children }) => (
  <h2 className={styles.caption}>
    {children}
  </h2>
)

export default Caption
