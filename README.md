# basic-koa
基本Koa项目结构
##router
  使用koa-router进行路由匹配，并自动读取路径进行路由注册
##controller
  对匹配的路由进行逻辑处理
##model
  数据表结构构造
##service
  联通逻辑层与数据层CRUD
##midlleware
  各模块的中间件与共同可复用中间件
##instant
  常量定义或者通用配置
##upload 
  文件上传存储，利用koa-body存储上传文件，使用koa-static进行访问代理
