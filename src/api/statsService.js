import baseApi from './baseApi'

export default class StatsService extends baseApi {
  getUsersDownloadLink() {
    return this.createURL('stats/users')
  }

  getTransactionsDownloadLink({ 
    startDateTime,
    finishDateTime,
    user,
    reasons 
  }) {
    const params = {
      startDateTime: this.toISOString(startDateTime),
      finishDateTime: this.toISOString(finishDateTime),
      reasons,
      user
    }
    return this.createURL('stats/transactions', params)    
  }
}