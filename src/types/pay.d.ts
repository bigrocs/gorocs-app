
// 定义扫码支付
// 定义商品详情类型
export interface GoodsDetail {
  goodsId: string; // 商品编号
  goodsName: string; // 商品名称
  quantity: number; // 商品数量
  price: number; // 商品单价，单位为分
  goodsCategory?: string; // 商品类目，可选属性
  body?: string; // 商品描述，可选属性
  showUrl?: string; // 商品地址，可选属性
  categoriesTree?: string; // 商品类目树，可选属性
  wxpayGoodsId?: string; // 微信商品编号，可选属性
}

// 定义扫码支付类型
export interface PlaceOrder {
  authCode: string; // 用户付款码
  title: string; // 商品标题
  outTradeNo: string; // 商户订单号
  totalFee: number; // 支付总金额
  operatorId?: string; // 操作员ID，可选属性
  terminalId?: string; // 终端ID，可选属性
  goodsTag?: string; // 商品标记，可选属性
  goodsDetail?: GoodsDetail[]; // 商品详情，可选属性
  notifyUrl?: string; // 支付完成后异步通知的URL
}

// 下单返回接口
export interface ResultOrder {
  returnCode: 'SUCCESS' | string; // 返回代码，只有 SUCCESS 表示支付成功
  type: 'cash' | 'member' | 'unionpay' | 'scan' | 'third_party' | 'digital_rmb' | 'spare1' | 'spare2' | 'spare3';
  channel?: 'wechat' | 'alipay' | 'unionpay' | 'digital' | 'sdykt'; // 支付通道
  method?: 'wechat' | 'alipay' | 'unionpay' | 'digital' | 'sdykt'; // 支付方式
  outTradeNo?: string; // 商户订单号
  tradeNo?: string; // 渠道交易编号
  totalFee?: number; // 订单金额，单位分
  buyerPayFee?: number; // 买家实际扣款金额，单位分
  status: 'SUCCESS' | 'CLOSED' | 'USERPAYING' | 'WAITING'; // 订单状态
  timeEnd?: string; // 订单完成时间
}
// 订单信息接口
export interface RefundInfo {
  returnCode: 'SUCCESS' | string; // 返回代码，只有 SUCCESS 表示操作成功
  outTradeNo: string; // 商户订单号
  outRefundNo: string; // 商户退款单号，可选属性
  tradeNo: string; // 渠道交易编号
  totalFee: number; // 订单金额，单位分
  refundFee: number; // 退款金额，可选属性，单位分
  status: 'SUCCESS' | 'CLOSED' | 'USERPAYING' | 'WAITING'; // 订单状态
}
// 扫码下单接口
export interface PayInterface {
  // 下单
  placeOrder(order: PlaceOrder): Promise<ResultOrder>;

  // 查询订单
  queryOrder(outTradeNo: string): Promise<ResultOrder>;

  // 退款
  refund(outTradeNo: string, refundNo:string, amount: number): Promise<RefundInfo>;

  // 查询退款
  queryRefund(outTradeNo: string, refundNo: string): Promise<RefundInfo>;

  // 获取用户 openid
  getOpenId(authCode: string): Promise<string>;
}