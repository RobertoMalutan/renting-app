
export function post(url, params, body, opts) {
  if (params) {
    url = this._addParamsToURL(url, params)
  }

  return this._request(url, 'POST', body || {}, opts)
}

export function addParamsToURL(url, params) {
  url += '?'
  let first = true

  Object.keys(params).forEach((param) => {
    let value = params[param]
    if (!first) {
      url += '&'
    }
    first = false
    url += param + '=' + value
  })
  return url
}

export function request(url, method, body, opts) {
  url = this._getApiPath() + url
  opts = opts || {}

  const options = {
    method: method,
    data: JSON.stringify(body),
    ...opts,
    headers: {
      ...this._composeHeaders(),
      ...opts.headers,
    },
  }
  
  return new Promise((resolve, reject) => {
    axios(url, options)
    .then((response) => {
      resolve(response.data)
    })
    .catch((err) => {
      if (axios.isCancel(err)) {
        reject({
          isCancel: true,
        })
      } else {
        reject(err.response)
      }
    })
  })
}