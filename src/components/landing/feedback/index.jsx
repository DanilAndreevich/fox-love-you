import React from 'react'

import Section from '../../common/section'
import Caption from '../../common/caption'
import Paragraph from '../../common/paragraph'

import pic from './image/bitmap.png'
import styles from './styles.module.css'

const mailLikes = 'mailto:likes@kontur.ru'

const Feedback = () => (
  <Section className={styles.section}>
    <img className={styles.picture} src={pic} alt="Лисичка с шляпой" />
    <Caption>
      Есть вопросы? Пиши!
    </Caption>
    <Paragraph center={true}>
      Лисичка только учится быть волшебницей.
      Помоги ей нарастить магические способности.
      Твоя обратная связь очень важна!
      Пишите на почту{' '} 
      <a className={styles.link} href={mailLikes}>
        likes@kontur.ru
      </a>
    </Paragraph>
  </Section>
)

export default Feedback
