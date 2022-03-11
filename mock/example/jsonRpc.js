// 代理 JSON-RPC 风格的接口
// 当命中指定方法名时，返回mock数据，未命中时使用代理服务进行透明代理
var express = require("express");
var router = express.Router();
const httpProxy = require('express-http-proxy')
const { host } = require('../memoizeHost')
const url = '/jsonRpc' // 要 mock 的接口

router.post(url, (req, res, next) => {
  const { serviceName } = req.body
  // 对特定对方法返回 mock 数据
  if (serviceName === 'LotteryActOspService.queryLotteryActPage') {
    const response = {
      data: 'test'
    }
    res.json(response)
  } else {
    // 其他方法进行透明代理
    next()
  }
}, /*透明代理*/httpProxy(host.getHost.bind(host)))

module.exports = {
  type: 'router', // router or proxy
  url,
  router: router
};



