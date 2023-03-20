// 定义支付方式的类型
export enum PaymentMethod {
  CASH = 'cash', // 现金支付
  MEMBER = 'member', // 会员卡支付
  UNIONPAY = 'unionpay', // 银联卡支付
  SCAN = 'scan', // 扫码支付
  THIRD_PARTY = 'third_party', // 第三方支付
  DIGITAL_RMB = 'digital_rmb', // 数字人民币支付
  SPARE1 = 'spare1', // 备用字段1
  SPARE2 = 'spare2', // 备用字段2
  SPARE3 = 'spare3' // 备用字段3
}

// 定义订单状态的类型
export enum OrderStatus {
  UNPAID = 'unpaid', // 待支付
  PAID = 'paid', // 已支付
  CANCELED = 'canceled' // 已取消
}

// 定义商品的类型
export interface Product {
  id: number; // 商品编号
  name: string; // 商品名称
  plu: number; // 商品PLU码
  barcode: number; // 商品条形码
  price: number; // 商品单价
  quantity: number; // 商品数量
  subtotal: number; // 商品小计金额
  snapshotId: string; // 商品快照ID
}

// 定义优惠信息的类型
interface Discount {
  id: string; // 优惠编号
  name: string; // 优惠名称
  type: string; // 优惠类型，如折扣、满减
  amount: number; // 优惠金额
  condition?: number; // 优惠条件，如满多少元
}

// 定义支付方式的类型
export interface Payment {
  id: string; // 支付编号
  name: string; // 支付名称
  method: PaymentMethod; // 支付方式
  amount: number; // 支付金额
  status: string; // 支付状态
}

// 定义订单的类型
export interface Order {
  orderId: string; // 订单编号
  orderTime: Date; // 下单时间
  customerName?: string; // 顾客姓名
  customerPhone?: string; // 顾客联系电话
  products: Product[]; // 商品列表
  totalAmount: number; // 实付金额
  payment: Payment[]; // 支付方式列表
  discounts: Discount[]; // 优惠信息列表
  orderDiscount: number; // 订单优惠金额
  cashier: string; // 收银员名称
  orderStatus: OrderStatus; // 订单状态
}