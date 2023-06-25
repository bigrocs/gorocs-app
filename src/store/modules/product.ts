/*
 * @Author: BigRocs
 * @Date: 2023-06-23 17:31:08
 * @LastEditTime: 2023-06-24 17:16:26
 * @LastEditors: BigRocs
 * @Description: QQ: 532388887, Email:bigrocs@qq.com
 */
import { store } from '@/store';
import { defineStore } from 'pinia';

import type { Product } from '@/types/product'
import { sampleProducts } from '@/types/product.d'

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [] as Product[],
  }),
  actions: {
    initProducts() {
      this.products = sampleProducts;
    },
    addProduct(product: Product) {
      this.products.push(product);
    },
    removeProduct(product: Product) {
      const index = this.products.indexOf(product);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    },
    // 根据 PLU 筛选商品（保证结果唯一）
    filterByPlu(plu: string): Product | undefined {
      return this.products.find((item) =>  item.plu === plu);
    },
    // 根据条形码筛选商品（保证结果唯一）
    filterByBarcode(barcode: string): Product | undefined {
      return this.products.find((item) => item.barcode === barcode);
    }
  },
});


// Need to be used outside the setup
export function useProductStoreWithOut() {
  return useProductStore(store);
}
