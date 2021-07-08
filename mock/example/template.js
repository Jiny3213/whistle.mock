// mock 模版文件
var express = require("express");
var router = express.Router();
const url = '/getProductList' // 要 mock 的接口，去除host的部分

const proxy = data => {
  // 为返回的数据增加一个字段 
  data.add = 'add some data'
  // 不需要返回，改写data即可
}

// get
router.get(url, (req, res) => {
  // 定义数据返回，适合直接复制json
  const data = { test: 'your data' }
  // 改写数据
  data.time = new Date().getTime()
  // 返回mock数据
  res.json(data)
})

// post
router.post(url, (req, res) => {
  console.log(req.body)
})

module.exports = {
  type: 'router', // 选择模式 router or proxy
  url,
  router: router,
  proxy: proxy
};



