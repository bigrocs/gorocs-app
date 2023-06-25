import { store } from '@/store';
import { defineStore } from 'pinia';

import type { Order, Product, Payment, Discount } from '@/types/order'
import { OrderStatus } from '@/types/order.d'

export const useOrderStore = defineStore({
  id: 'order', // 定义store的唯一标识符
  state: () => ({
    cachedOrder: {} as Order, // 定义store的状态，此处定义了一个空的订单对象
  }),
  actions: {
    // 初始化订单
    initOrder() {
      this.cachedOrder = {
        orderId: '',
        orderTime: new Date(),
        customerName: '',
        customerPhone: '',
        products: [],
        totalQuantity: 0,
        totalAmount: 0,
        payment: [],
        discounts: [],
        orderDiscount: 0,
        cashier: '',
        orderStatus: OrderStatus.UNPAID,
      }
    },
     // 设置订单编号
    setOrderId(orderId: string) {
      this.cachedOrder.orderId = orderId;
    },
    // 设置下单时间
    setOrderTime(orderTime: Date) {
      this.cachedOrder.orderTime = orderTime;
    },
    // 设置顾客姓名
    setCustomerName(customerName: string) {
      this.cachedOrder.customerName = customerName;
    },
    // 设置顾客联系电话
    setCustomerPhone(customerPhone: string) {
      this.cachedOrder.customerPhone = customerPhone;
    },
    // 更新Id总价总数量
    updateIdAndTotalAmountAndTotalQuantity() {
      let totalAmount = 0;
      let totalQuantity = 0;
      this.cachedOrder.products.forEach((p, index) => {
          p.id = index + 1
          totalAmount += p.subtotal
          totalQuantity += p.quantity
      });
      this.cachedOrder.totalAmount = totalAmount;
      this.cachedOrder.totalQuantity = totalQuantity
    },
    // 添加商品
    addProduct(product: Product) {
      // 先检查商品是否已经存在，如果存在，则数量加1，否则添加新商品
      const index = this.cachedOrder.products.findIndex((p) => p.snapshotId === product.snapshotId);
      if (index !== -1) {
        this.cachedOrder.products[index].quantity++;
      } else {
        this.cachedOrder.products.push(product);
      }
      // 更新Id总价总数量
      this.updateIdAndTotalAmountAndTotalQuantity()
    },
    // 移除商品
    removeProduct(product: Product) {
      const index = this.cachedOrder.products.findIndex((p) => p.snapshotId === product.snapshotId);
      if (index !== -1) {
        const quantity = this.cachedOrder.products[index].quantity;
        if (quantity > 1) {
          this.cachedOrder.products[index].quantity--;
        } else {
          this.cachedOrder.products.splice(index, 1);
        }
        // 更新Id总价总数量
        this.updateIdAndTotalAmountAndTotalQuantity()
      }
    },
    // 更新商品数量
    updateProductQuantity(product: Product, quantity: number) {
      const index = this.cachedOrder.products.findIndex((p) => p.snapshotId === product.snapshotId);
      if (index !== -1) {
        this.cachedOrder.products[index].quantity = quantity;
        // 更新Id总价总数量
        this.updateIdAndTotalAmountAndTotalQuantity()
      }
    },
    // 订单支付相关
    addPayment(payment: Payment) {
      this.cachedOrder.payment.push(payment); // 在订单对象中添加支付方式
    },
    removePayment(paymentOrderNo: string) {
      this.cachedOrder.payment = this.cachedOrder.payment.filter(payment => payment.orderNo !== paymentOrderNo); // 从订单对象中移除指定的支付方式
    },
    // 订单优惠相关
    addDiscount(discount: Discount) {
      this.cachedOrder.discounts.push(discount); // 在订单对象中添加优惠信息
    },
    removeDiscount(discountId: string) {
      this.cachedOrder.discounts = this.cachedOrder.discounts.filter(discount => discount.id !== discountId); // 从订单对象中移除指定的优惠信息
    },
    getDiscountTotal() {
      return this.cachedOrder.discounts.reduce((total, discount) => total + discount.amount, 0); // 计算所有优惠信息的总金额
    },
    setOrderDiscount(discount: number) {
      this.cachedOrder.orderDiscount = discount; // 设置订单优惠金额
    },
    getOrderTotal() {
      const subTotal = this.cachedOrder.products.reduce((total, product) => total + product.subtotal, 0); // 计算商品小计总金额
      const discountTotal = this.getDiscountTotal(); // 获取所有优惠信息的总金额
      const orderDiscount = this.cachedOrder.orderDiscount; // 获取订单优惠金额
      return subTotal - discountTotal - orderDiscount; // 计算订单总金额
    },
  },
});


// Need to be used outside the setup
export function useOrderStoreWithOut() {
  return useOrderStore(store);
}
