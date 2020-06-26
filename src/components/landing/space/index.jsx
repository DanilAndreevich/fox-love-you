import React from 'react'

import Tooltip from '@skbkontur/react-ui/Tooltip'

import Caption from '../../common/caption'
import Paragraph from '../../common/paragraph'
import Section from '../../common/section'
import question1 from './image/group-3.png'
import styles from './styles.module.css'

const paragraph = 'Лиса уже умеет лайкать консультантов из отделов, ВИП-линию, сотрудников на почте и чатах, экспертов АУБ, наставников и экспертов ЭО.'

const paragraph2 = 'Если ты ещё не прошел собеседование в отдел, Лисичка посчитает тебя чуть позже.'

function renderTooltip() {
  return (
    <div>
      При расчете Лиса считает только боевые супервизии
    </div>
  )
}

const Space = () => (
  <Section className={styles.space}>
    <Caption>Кого Лиса посчитает</Caption>
    <div className={styles.text}>
      <Paragraph>
        {paragraph}
      </Paragraph>
      <Paragraph>
        {paragraph2}&nbsp;
        <Tooltip render={renderTooltip}>
          <img
            src={question1}
            alt="Подсказка связанная с расчетом боевых супервиизий"
          />
        </Tooltip>
      </Paragraph>
    </div>
  </Section>
);

export default Space;
