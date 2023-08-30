'use strict'

const verifyPayload = require("../helpers/verifypayload")
const {User} = require("../models/index")

async function authenticatePub (req,res,next) {
  try {
    console.log(req.headers)
    const {access_token} = req.headers
    if(!access_token) {
      throw {name: "Unauthenticated"}
    }
    const payload = verifyPayload(access_token)
    const findUser = await User.findByPk(payload.id)

    if(!findUser) {throw {name : 'Unauthenticated'}}

    req.user = {id: findUser.id, username: findUser.username}
    console.log(req.user)
    next()
    
  }
  catch(err) {
    console.log(err)
    next(err)
  }
}



module.exports = authenticatePub