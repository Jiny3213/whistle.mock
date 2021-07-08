// mock 模版文件
var express = require("express");
var router = express.Router();
const url = '/vips-mobile/wpcjx/wx/coupon/batchGetVipCouponInfo' // 要 mock 的接口，去除host的部分

const proxy = data => {
  // 为返回的数据增加一个字段 
  data.add = 'add some data'
  // 不需要返回，改写data即可
}

// get
router.get(url, (req, res) => {
  // 定义数据返回，适合直接复制json
  const data = {
    "code": 1,
    "msg": "success",
    "data": {
      "6919220176103781782": {
        "maxDiscountCoupon": "3",
        "totalMoney": "3",
        "totalCount": 1,
        "couponList": [
          {
            "couponId": "3198820",
            "status": 3,
            "buy": "3",
            "fav": "3",
            "activateBegin": 1624240800,
            "activateEnd": 1629511200,
            "useBegin": 1624240800,
            "useEnd": 1629511200,
            "couponType": 2,
            "giveType": 2
          }
        ]
      }
    }
  }
  // 改写数据
  const productIdList = [
    '6919321468615738437',
    '6919278305127518294',
    '6919289771410195080'
  ]
  for (item of productIdList) {
    data.data[item] = data.data["6919220176103781782"]
  }
  
  // 返回mock数据
  res.json(data)
})

module.exports = {
  type: 'router', // 选择模式 router or proxy
  url,
  router: router,
  proxy: proxy
};



