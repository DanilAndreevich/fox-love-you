import baseApi from './baseApi'

export default class TransactionsService extends baseApi {
  get({ startDateTime, finishDateTime, user, count, offset, reasons }) {
    const params = {
      startDateTime: this.toISOString(startDateTime),
      finishDateTime: this.toISOString(finishDateTime),
      reasons,
      user,
      count,
      offset
    }

    return this.fetchGet('transactions', params)
      .then(({ total, items }) => ({ total, transactions: items }))
  }

  add(reason, user, value, comment) {
    const transaction = {
      reason,
      user,
      value,
      comment
    }

    return this.fetchPost('transactions', undefined, transaction)
  }
}