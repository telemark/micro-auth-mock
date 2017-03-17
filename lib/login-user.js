'use strict'

const user = require('../config/user.json')

module.exports = data => {
  return new Promise((resolve, reject) => {
    resolve(user)
  })
}
