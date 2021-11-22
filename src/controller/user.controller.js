const UserModel = require('../model/user.model')

class UserController {
  async getUser(ctx,next) {
    ctx.body = 'getUser'
  }
}

module.exports = new UserController()