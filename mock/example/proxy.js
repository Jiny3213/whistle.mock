var express = require("express");
const url = '/product/info/list'

// 代理线上接口，但把线上商品价格改为5
const proxy = data => {
  data = data.map(item => {
    item.prize = 5
    return item
  })
}

module.exports = {
  type: 'proxy', // 选择一种mock方式
  url,
  proxy: proxy
};