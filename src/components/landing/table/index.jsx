import React from 'react'

import Caption from '../../common/caption'
import Paragraph from '../../common/paragraph'
import Section from '../../common/section'

import styles from './styles.module.css'
import Tabs from './tabs'

const paragraph = 'Математически одаренная Лиса считает всё-всё-всё и ставит лайки по специальному алгоритму (в этом мы ей помогли, чтобы все было по-честному!)'
const Table = () => (
  <Section className={styles.container} anchorId="table">
    <Caption className={styles.caption}>
      Как Лиса считает достижения
    </Caption>
    <Paragraph center={true}>
      {paragraph}
    </Paragraph>
    <Tabs />
  </Section>
)

export default Table
