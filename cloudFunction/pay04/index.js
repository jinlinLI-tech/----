const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

exports.main = async (event, context) => {
  const res = await cloud.cloudPay.unifiedOrder({
    "body": "智慧食堂",
    "outTradeNo": "2938210727" + new Date().getTime(),//订单号
    "spbillCreateIp": "127.0.0.1",//本机IP地址
    "subMchId": "1900009231",//商家号
    "totalFee": 1,//单位是分
    "envId": "cloud1-5gf3plz1f0efa10a",
    "functionName": "pay_cb"
  })
  return res
}
