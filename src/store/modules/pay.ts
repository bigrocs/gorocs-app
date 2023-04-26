import { defineStore } from 'pinia'

import { Cash } from '@/utils/pay/cash'
import { Member } from '@/utils/pay/member'
import { Unionpay } from '@/utils/pay/unionpay'
import { ScanBcbt } from '@/utils/pay/scanBcbt'

import type { PayInterface, PlaceOrder, ResultOrder, RefundInfo } from '@/types/pay'


export const usePayStore = defineStore('pay', {
  state: () => ({
    scanChannel: '',
    // 默认使用微信支付服务
    payService: {} as PayInterface
  }),
  actions: {
    // 根据支付方式切换支付服务对象
    setPayService(type: string) {
      switch (type) {
        case "cash":
          this.payService = new Cash()
        case "member":
          this.payService = new Member()
        case "unionpay":
          this.payService = new Unionpay()
        case "scan":
          switch (this.scanChannel) {
            case "bcbt":
              this.payService = new ScanBcbt()
              break
            default:
              throw new Error(`Unsupported payment scanChannel: ${this.scanChannel}`)
          }
          break;
        default:
              throw new Error(`Unsupported payment type: ${type}`)
          break;
      }
    },
    async placeOrder(order: PlaceOrder): Promise<ResultOrder> {
      return await this.payService.placeOrder(order)
    },
    async queryOrder(outTradeNo: string): Promise<ResultOrder> {
      return await this.payService.queryOrder(outTradeNo)
    },
    async refund(outTradeNo: string, outRefundNo:string, amount: number): Promise<RefundInfo> {
      return await this.payService.refund(outTradeNo, outRefundNo, amount)
    },
    async queryRefund(outTradeNo: string, refundNo: string): Promise<RefundInfo> {
      return await this.payService.queryRefund(outTradeNo, refundNo)
    },
    async getOpenId(authCode: string): Promise<string> {
      return await this.payService.getOpenId(authCode)
    }
  }
})