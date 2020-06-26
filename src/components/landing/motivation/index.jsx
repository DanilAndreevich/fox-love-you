import React from 'react'

import Caption from '../../common/caption'
import Paragraph from '../../common/paragraph'
import Section from '../../common/section'
import styles from './styles.module.css'

const Motivation = () => (
  <Section className={styles.motivation} anchorId="motivation">
    <Caption>Мотивационная программа УКС</Caption>
    <div className={styles.text}>
      <Paragraph>
        Клиенты ценят нашу техподдержку, и это заслуга каждого из нас.
        Чтобы и дальше радовать пользователей, нам нужно усердно
        работать и расти профессионально.
      </Paragraph>
      <Paragraph>
        Мудрая Лиса поддержит тебя на этом пути.
        Она видит и лайкает все твои достижения.
        А теперь ты можешь копить ее лайки и обменивать на 
        приятные <a className={styles.link} href="#trade">ништяки</a>.
      </Paragraph>
    </div>
  </Section>
)

export default Motivation
