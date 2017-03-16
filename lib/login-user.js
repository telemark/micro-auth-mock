'use strict'

module.exports = data => {
  return new Promise((resolve, reject) => {
    const user = {
      cn: 'Mock Mr Mock',
      uid: data.username
    }
    resolve(user)
  })
}
