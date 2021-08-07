import axios from 'axios'

/**
 * Create an Axios Client with defaults
 */

const client = axios.create({
  baseURL: 'http://localhost:3030/api',
  // auth: { Authorization: 'Bearer ' + { getToken } }
})

/**
 * Request Wrapper with default success/error actions
 */
export const apiCall = (method, route, body = null, token = null) => {
  const onSuccess = function (response) {
    return response.data
  }

  const onError = function (error) {
    return Promise.reject(error.response || error.message)
  }

  return client({
    method,
    url: route,
    data: body,
  })
    .then(onSuccess)
    .catch(onError)
}

export const apiCallGet = (route, params) => {
  const onSuccess = function (response) {
    return response.data
  }

  const onError = function (error) {
    return Promise.reject(error.response || error.message)
  }

  return client
    .get(route, {
      params,
    })
    .then(onSuccess)
    .catch(onError)
}
