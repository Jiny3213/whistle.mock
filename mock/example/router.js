var express = require("express");
var router = express.Router();
const url = '/product/info/list'

const futureTime = Math.floor(new Date().getTime() / 1000) + 60 * 60 * 24

// 使用自己编写的mock数据
router.get(url, (req, res) => {
  let list = [
    {
      productId: 1,
      productName: '蔬菜',
      prize: 10
    }
  ]

  list = list.map(item => {
    item.futureTime = futureTime
    return item
  })

  res.json(list)
});

module.exports = {
  type: 'router',
  url,
  router: router,
};