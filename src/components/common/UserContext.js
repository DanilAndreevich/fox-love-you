import React from 'react'

const defaultValue = {
  isBigFox: null,
  name: null,
  avatarUri: null,
  balance: null,
  login: null,
  state: 0, // 0 - in progress, 1 - loaded, 2 - error
  fetchUserData: () => null
}

export { defaultValue }

export default React.createContext(defaultValue)
