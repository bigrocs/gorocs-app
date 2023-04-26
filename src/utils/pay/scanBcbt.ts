import type { PayInterface, PlaceOrder, ResultOrder, RefundInfo } from '@/types/pay'

// 扫码下单接口
export class ScanBcbt implements PayInterface {
  // 下单
  async placeOrder(order: PlaceOrder): Promise<ResultOrder> {
     // ...执行下单逻辑
    const result: ResultOrder = {
        returnCode: 'SUCCESS',
        type: 'cash',
        channel: 'wechat',
        method: 'wechat',
        outTradeNo: "order.outTradeNo",
        tradeNo: 'wx202301010101',
        totalFee: order.totalFee,
        buyerPayFee: order.totalFee,
        status: 'SUCCESS',
        timeEnd: new Date().toISOString()
    };
    return result;
  }
  // 查询订单
  async queryOrder(outTradeNo: string): Promise<ResultOrder> {
    // ...执行下单逻辑
    const result: ResultOrder = {
        returnCode: 'SUCCESS',
        type: 'cash',
        channel: 'wechat',
        method: 'wechat',
        outTradeNo: outTradeNo,
        tradeNo: 'wx202301010101',
        totalFee: 1,
        buyerPayFee: 1,
        status: 'SUCCESS',
        timeEnd: new Date().toISOString()
    };
    return result;
  }

  // 退款
  async refund(outTradeNo: string, outRefundNo:string, amount: number): Promise<RefundInfo> {
    // ...执行下单逻辑
    const result: RefundInfo = {
        returnCode: 'SUCCESS',
        outTradeNo: outTradeNo,
        outRefundNo: outRefundNo,
        tradeNo: 'wx202301010101',
        totalFee: 1,
        refundFee: 1,
        status: 'SUCCESS'
    };
    return result;
  }

  // 查询退款
  async queryRefund(outTradeNo: string, refundNo: string): Promise<RefundInfo> {
    // ...执行下单逻辑
    const result: RefundInfo = {
        returnCode: 'SUCCESS',
        outTradeNo: outTradeNo,
        outRefundNo: "outRefundNo",
        tradeNo: 'wx202301010101',
        totalFee: 1,
        refundFee: 1,
        status: 'SUCCESS'
    };
    return result;
  }

  // 获取用户 openid
  async getOpenId(authCode: string): Promise<string> {
    return ""
  }
}