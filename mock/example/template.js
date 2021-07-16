// mock 模版文件
var express = require("express");
var router = express.Router();
const url = '$url' // 要 mock 的接口，去除host的部分

// 代理设置
const proxy = data => {
  // 为返回的数据增加一个字段 
  data.add = 'add some data'
  // return data 不返回也可以
}

// get
router.get(url, (req, res) => {
  // console.log(req.query) // 请求参数
  // 定义数据返回，适合直接复制json，再用编辑器format一下
  const data = { test: 'your data' }
  // 改写数据
  data.time = new Date().getTime()
  // 返回mock数据
  res.json(data)
})

// post
router.post(url, (req, res) => {
  // console.log(req.body) // 请求体
})

module.exports = {
  type: '$type', // 选择模式 router or proxy
  url,
  router: router,
  proxy: proxy
};



