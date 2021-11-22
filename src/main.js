const path = require('path')

const Koa = require('koa')
const koaBody = require('koa-body')
const router = require('./router')
const KoaStatic = require('koa-static')

const app = new Koa()
app.use(koaBody({
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname,'upload'),
    keepExtensions: true
  }
}))
  .use(router.routes())
  .use(router.allowedMethods())
  .use(KoaStatic(path.join(__dirname,'upload')))

/* 统一错误捕获 
  err {
    code: number,
    message: string,
    result: any
  }
  中间件调用方式为 ctx.app.emit('error',err,ctx)
*/
app.on('error',(err,ctx)=> {
  let status;
  switch(err.code) {
    case '10001':
      status = 400;
      break;
    default:
      status = 500;
  }
  ctx.status = status;
  ctx.body = err
})

app.listen(7777, ()=> {
  console.log('open in http://localhost:7777')
})
