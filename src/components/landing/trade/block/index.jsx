import React from 'react'
import PropTypes from 'prop-types'

import Tooltip from '@skbkontur/react-ui/Tooltip'

import question from './image/question.png'
import styles from './styles.module.css'

const Block = ({ title, children, picture, pictureAlt, href, tooltip }) => (
  <div className={styles.block}>
    <a className={styles.pictureLink} href={href} target="_blank">
      <img className={styles.picture} src={picture} alt={pictureAlt} />
      <div className={styles.title}>
        {title}
      </div>
    </a>
    <div className={styles.description}>
      {children}
      {
        tooltip
          ? <React.Fragment>
              {' '}
              <Tooltip render={() => tooltip}>
                <img
                  src={question}
                  alt={tooltip}
                />
              </Tooltip>
            </React.Fragment>
          : null
      }
    </div>
  </div>
)

Block.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  pictureAlt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  tooltip: PropTypes.string
}

export default Block
