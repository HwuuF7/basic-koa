const Router = require('@koa/router')

const {getUser} = require('../controller/user.controller')

const router = new Router({prefix: '/user'})

router.get('/', getUser)

module.exports = router