'use strict'

module.exports = async data => {
  const user = {
    cn: 'Mock Mr Mock',
    uid: data.username
  }
  return user
}
