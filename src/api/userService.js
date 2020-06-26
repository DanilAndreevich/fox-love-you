import baseApi from './baseApi'

export default class UserService extends baseApi {
  search(name, count, offset) {
    return this.fetchGet('users', { name, count, offset })
      .then(({ total, items }) => ({ total, users: items }))
  }

  get(login) {
    return this.fetchGet(`users/${login}`)
  }

  getAll(usersPerRequest = 100) {
    const result = new Map()

    const getPartOfUsers = (offset, count) => {
      return this
        .search(undefined, count, offset)
        .then(({ users }) => {
          users
            .forEach(user => result.set(user.login, {
              name: user.name,
              balance: user.balance,
              avatar: user.avatarUri
            }))
          if (users.length === count) {
            return getPartOfUsers(offset + count, count)
          } else {
            return result
          }
        })
    }

    return getPartOfUsers(0, usersPerRequest)
  }

  me() {
    return this.fetchGet('profile')
  }

  getLogoutLink() {
    return this.createURL('profile/logout')
  }
}
