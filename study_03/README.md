### EXPRESS练习
express的get请求 "*"无法匹配所有的路由 如需要保底路由 get(/.*/,callfn)
#### 中间件
    next()一直执行到下一个中间件，直到没有中间件为止 
    或者 res.end()结束响应 
    或者 next(err)报错 找后续处理中间件 如没有 响应500
express
### nodemon
用于重启应用 当开发时修改代码 会重新启动项目，无需手动输入指令