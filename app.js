/**
 * Created by haozi on 5/8/2017.
 */
var cq = require('node-coolq')
var sdk = require('./lib/index')

var app = new cq

app.use(sdk.messageParse)

app.use(async (ctx, next) => {
    console.log('message -> ' + ctx.message)
    await next()
})

app.listen().then(_ => {})