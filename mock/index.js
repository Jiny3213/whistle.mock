const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const proxy = require('express-http-proxy')
const bodyParser = require('body-parser')
const cors = require('cors')
const { host, hostMiddleware } = require('./memoizeHost')
const config = require('./config')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 解决跨域问题
app.use(cors({
  origin: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  preflightContinue: false,
  optionsSuccessStatus: 200,
  credentials: true
}))
// 自动引入api
let mockList = []
for(apiDir of config.include) {
  try {
    filenameList = fs.readdirSync(path.join(__dirname, '../', apiDir))
    mockList = mockList.concat(filenameList.map(filename => {
      return require(path.join(__dirname, '../', apiDir, filename))
    }))
  } catch(err) {
    // 没有找到文件
    console.log(err)
  }
}
const proxyList = mockList.filter(item => item.type === 'proxy')
const routerList = mockList.filter(item => item.type === 'router')

app.use(hostMiddleware)

// 代理服务
// https://github.com/villadora/express-http-proxy
app.use('/', proxy(host.getHost.bind(host), {
  proxyIndex: 0,
  filter: function(req, res) {
    for(let i in proxyList) {
      if(new RegExp(proxyList[i].url).test(req.url)) {
        this.proxyIndex = i
        return true
      }
    }
    return false
  },
  userResDecorator: function(proxyRes, proxyResData, userReq, userRes) {
    let data = JSON.parse(proxyResData.toString('utf8'));
    // 执行用户的数据修改方法
    const handleData = proxyList[this.proxyIndex].proxy
    const resData = handleData && handleData(data) || data
    return JSON.stringify(resData);
  },
}))

// 加载 router
for(item of routerList) {
  app.use(item.router)
}

// 兜底提示，没有配置但又把请求发到了插件
app.use('*', function(req, res, next) {
  res.json({
    error: '请配置mock规则，未找到此请求对应的处理规则'
  })
})

module.exports = app  