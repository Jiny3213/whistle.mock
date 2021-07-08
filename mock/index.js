const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const proxy = require('express-http-proxy')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 解决xup跨域问题
app.use(cors({
  origin: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  preflightContinue: false,
  optionsSuccessStatus: 200,
  credentials: true
}))
// 自动引入api，必须写在./api目录中
const dir = path.join(__dirname, './api')
let files = fs.readdirSync(dir)
files = files.map(item => {
  return require(path.join(__dirname, './api', item))
})
const proxyList = files.filter(item => item.type === 'proxy')
const routerList = files.filter(item => item.type === 'router')
let proxyMap = {} // 以后增加重复key报错功能
for(let item of proxyList) {
  proxyMap[item.url] = item.proxy
}

// 动态获取 host
let proxyHost = '' 
function getProxy() {
  return proxyHost
}

// 记录当前url
let currentUrl = ''

// 获取 host 中间件
var memoizeHost = function (req, res, next) {
  proxyHost = req.originalReq.headers.host
  next()
}

app.use(memoizeHost)

// 代理服务
// https://github.com/villadora/express-http-proxy
app.use('/', proxy(getProxy, {
  filter: function(req, res) {
    for(let item of proxyList) {
      if(new RegExp(item.url).test(req.url)) {
        currentUrl = item.url
        return true
      }
    }
    return false
  },
  userResDecorator: function(proxyRes, proxyResData, userReq, userRes) {
    let data = JSON.parse(proxyResData.toString('utf8'));
    // 执行代理逻辑
    proxyMap[currentUrl](data)
    data.globalProxy = '此数据被增加了字段, 可以通过这种方式增删返回数据的字段, 这是全局修改的'
    return JSON.stringify(data);
  }
}))

// 加载 router
for(item of routerList) {
  app.use(item.router)
}

module.exports = app  