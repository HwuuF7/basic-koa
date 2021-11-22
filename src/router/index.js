/* 用于批量自动注册路由 */
const fs = require('fs')
const path = require('path')

const Router = require('@koa/router')
const router = new Router()


const files = fs.readdirSync(__dirname)

for(let file of files) {
  if(file === 'index.js') continue;
  const r = require(path.join(__dirname,file))
  router.use(r.routes())
}

module.exports = router;