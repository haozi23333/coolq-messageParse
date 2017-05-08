# messageParse
____
信息解析  

根据[cqsocketapi](https://github.com/haozi23333/cqsocketapi)的规则解析信息
# 安装
`$ npm install coolq-messageparse`

# 使用
```javascript
    const parse = require('coolq-messageparse')
    app.use(parse)
    
```
会读取`ctx.content`里面的信息进行解析放置在 `ctx.message`  
`GroupMessage 597949573 296409654 W0NROmltYWdlLGZpbGU9OEY1Qzg2MUI3REFCRURDQ0FGNTIxNDFDQUFGMjRCMzguZ2lmXQ==` ->
`GroupMessage 597949573 296409654 [CQ:bface,p=10616,id=6092F5C29A441FF59F714B5AB4E1A884]`