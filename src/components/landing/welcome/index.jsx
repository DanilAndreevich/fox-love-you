import React from 'react'

import Center from '@skbkontur/react-ui/Center'

import styles from './styles.module.css'
import pic from './image/group-7.png'

const Welcome = () => (
  <header className={styles.header}>
    <Center>
      <img src={pic} alt="Картинка с людьми" className={styles.pic} />
    </Center>
  </header>
);

export default Welcome;
