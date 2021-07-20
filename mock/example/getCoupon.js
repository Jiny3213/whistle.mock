// mock 模版文件
var express = require("express");
var router = express.Router();
const url = '/vips-mobile/wpcjx/wx/coupon/batchGetVipCouponInfo'

router.get(url, (req, res) => {
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
  // 改写数据，为以下商品增加券
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
};



