import React from 'react'

import Tabs from '@skbkontur/react-ui/Tabs'

import VipTab from './VipTab'
import MailTab from './MailTab'
import ConsulTab from './ConsulTab'
import AubTab from './AubTab'
import MentorsTab from './MentorsTab'
import ExpertsTab from './ExpertsTab'
import styles from './styles.module.css'

class UncTabs extends React.Component {
  state = {
    active: 'cons-people'
  }

  tabContent = id => {
    switch (id) {
      case 'cons-people': {
        return <ConsulTab />
      }
      case 'vip-people': {
        return <VipTab />
      }
      case 'mail-people': {
        return <MailTab />
      }
      case 'aub-people': {
        return <AubTab />
      }
      case 'mentors-people': {
        return <MentorsTab />
      }
      case 'experts-people': {
        return <ExpertsTab />
      }
    }
  }

  render() {
    const { active } = this.state
    const tabContent = this.tabContent(active)

    return (
      <div className={styles.tabs}>
        <Tabs
          value={this.state.active}
          onChange={(_, v) => this.setState({ active: v })}
        >
          <Tabs.Tab id="cons-people">Консультанты</Tabs.Tab>
          <Tabs.Tab id="mail-people">Почтовики</Tabs.Tab>
          <Tabs.Tab id="vip-people">ВИП-линия</Tabs.Tab>
          <Tabs.Tab id="aub-people">Эксперты АУБ</Tabs.Tab>
          <Tabs.Tab id="mentors-people">Наставники</Tabs.Tab>
          <Tabs.Tab id="experts-people">Эксперты</Tabs.Tab>
        </Tabs>
        <table className={styles.table}>
          {tabContent}
        </table>
      </div>
    )
  }
}

export default UncTabs
