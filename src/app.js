const bunyan = require('bunyan');
const {name} = require('../package.json')
const logger = bunyan.createLogger({
  name: name,
  level: bunyan.DEBUG,
  stream: process.stdout,
  serializers: bunyan.stdSerializers
});

const Koa = require('koa');
const request = require('request-promise')

const app = new Koa();

const koaBunyanLogger = require('koa-bunyan-logger');
app.use(koaBunyanLogger(logger));
app.use(koaBunyanLogger.requestLogger());

app.use(async ctx => {
  console.log(`${new Date().toISOString()} ${ctx.method} ${ctx.url}`)
  ctx.body = await request('https://www.example.com')
})

app.listen(process.env.PORT || 8080)
