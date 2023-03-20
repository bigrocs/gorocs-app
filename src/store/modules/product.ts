import { store } from '@/store';
import { defineStore } from 'pinia';

import type { Product } from '@/types/product'

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [] as Product[],
  }),
  actions: {
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
    filterByPlu(products: Product[], plu: number): Product | undefined {
      const product = products.find((product) => product.plu === plu);
      return product;
    },
    // 根据条形码筛选商品（保证结果唯一）
    filterByBarcode(products: Product[], barcode: string): Product | undefined {
      const product = products.find((product) => product.barcode === barcode);
      return product;
    }
  },
});


// Need to be used outside the setup
export function useProductStoreWithOut() {
  return useProductStore(store);
}
