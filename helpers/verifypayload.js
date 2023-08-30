'use strict'
const jwt = require('jsonwebtoken')
 

function verifyPayload(access_token) {
const payload = jwt.verify(access_token, process.env.JWT_SECRET)

return payload
}

module.exports = verifyPayload