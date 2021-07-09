// xup 请求同一个接口，根据请求体不同（带有不同的方法名），获取不同的数据
// 当命中指定方法名时，返回mock数据，未命中时使用代理服务进行透明代理
var express = require("express");
var router = express.Router();
const httpProxy = require('express-http-proxy')

const url = '/vposRoutePostSUP' // 要 mock 的接口

const proxy = data => {}

let proxyHost = ''
function getProxy() {
  return proxyHost
}
router.post(url, (req, res, next) => {
  const { serviceName } = req.body
  // 对特定对方法返回 mock 数据
  if (serviceName === 'LotteryActOspService.queryLotteryActPage') {
    const response = {
      a: 222
    }
    res.json(response)
  } else {
    // 其他方法进行透明代理
    proxyHost = req.originalReq.headers.host
    next()
  }
}, httpProxy(getProxy, {
  userResDecorator: function(proxyRes, proxyResData, userReq, userRes) {
    let data = JSON.parse(proxyResData.toString('utf8'));
    data.globalProxy = 'good xup'
    return JSON.stringify(data);
  }
}))

module.exports = {
  type: 'router', // router or proxy
  url,
  router: router,
  proxy: proxy
};



