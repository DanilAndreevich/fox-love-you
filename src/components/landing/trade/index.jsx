import React from 'react'

import Caption from '../../common/caption'
import Paragraph from '../../common/paragraph'
import Section from '../../common/section'
import Block from './block'

import calliderPic from './image/plushki.png'
import officePic from './image/orgtechnika.png'
import graphPic from './image/group.png'
import souvenirPic from './image/pos.png'
import styles from './styles.module.css'

const linkCallider =
  'https://wiki.skbkontur.ru/pages/viewpage.action?pageId=210900898'
const linkOfficeEquip =
  'https://wiki.skbkontur.ru/pages/viewpage.action?pageId=210900900'
const linkGraph =
  'https://wiki.skbkontur.ru/pages/viewpage.action?pageId=210900902'
const linkSouvenirs =
  'https://wiki.skbkontur.ru/pages/viewpage.action?pageId=239822890'
const mailLikes = 'mailto:likes@kontur.ru'

const Trade = () => (
  <Section className={styles.section} anchorId="trade">
    <Caption>
      Обменять лайки можно на эти вознаграждения
    </Caption>
    <Paragraph center={true}>
      Пока покупки в ручном режиме через wiki. Интернет-магазин появится позже
    </Paragraph>
    <div className={styles.blocks}>
      <Block
        title="Разные плюшки"
        picture={calliderPic}
        pictureAlt="Callider"
        href={linkCallider}
        tooltip="При нажатии на картинку можно перейти на страницу wiki :)"
      >
        Обратись к супервизору твоей группы
      </Block>
      <Block
        title="Оргтехника"
        picture={officePic}
        pictureAlt="Оргтехника"
        href={linkOfficeEquip}
      >
        Для покупки напиши нам на почту{' '}
        <a className={styles.link} href={mailLikes}>
          likes@kontur.ru
        </a>
      </Block>
      <Block
        title="График"
        picture={graphPic}
        pictureAlt="График"
        href={linkGraph}
      >
        Для покупки напиши нам на почту{' '}
        <a className={styles.link} href={mailLikes}>
          likes@kontur.ru
        </a>
      </Block>
      <Block
        title="Сувенирка"
        picture={souvenirPic}
        pictureAlt="Сувенир"
        href={linkSouvenirs}
      >
        Для покупки напиши нам на почту{' '}
        <a className={styles.link} href={mailLikes}>
          likes@kontur.ru
        </a>
      </Block>
    </div>
  </Section>
)

export default Trade
