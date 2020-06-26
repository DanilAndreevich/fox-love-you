export default class BaseApi {
  constructor({ baseURL }) {
    if (baseURL[baseURL.length - 1] !== '/') {
      baseURL += '/'
    }
    this.baseURL = baseURL;
  }

  fetchGet(path, params) {
    const url = this.createURL(path, params)
    return fetch(url, { credentials: 'same-origin' })
      .then(res => {
        if (res.status !== 200) {
          throw new Error(`Status code is not 200, but ${res.status}`)
        }
        return res.json()
      })
  }

  fetchPost(path, params, body) {
    const url = this.createURL(path, params)
    body = Object.getOwnPropertyNames(body)
      .filter(key => body[key] !== null && body[key] !== undefined)
      .reduce((previous, current) => {
        previous[current] = body[current]
        return previous
      }, {})
    return fetch(url, {
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(body),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Status code is not 200-299, but ${res.status}`)
        }
        return res
      })
  }

  createURL(path, params) {
    let url = this.baseURL + path
    if (params === undefined) {
      return url
    }
    const query = Object
      .entries(params)
      .reduce((previous, [key, value]) => 
        value === undefined || value === null
          ? previous
          : []
            .concat(value)
            .map(item => encodeURIComponent(key) + '=' + encodeURIComponent(item))
            .concat(previous)
      , [])
      .join('&')
    if (query) {
      url += '?' + query
    }
    return url
  }

  toISOString(date) {
    return date
      ? date.toISOString()
      : date
  }
}