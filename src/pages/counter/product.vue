<template>
  <van-list
    finished-text="没有更多了"
    :finished="true"
  >
    <van-cell v-for="(item,key) in items" :key="key" :title="item.name" />
  </van-list>
</template>
<script setup lang="ts">
import type { ProductItem } from '@/types/product'
const items: ProductItem[] = [
  {
    plu: 12456,
    barCode: 6542314,
    name: "撒打算",
    price: 10.6,
    quantity: 1.62,
    total: 14456456,
  }
]
for (let index = 0; index < 10; index++) {
  items.push({
    plu: items[0].plu,
    barCode: items[0].barCode,
    name: items[0].name+ index,
    price: items[0].price,
    quantity: items[0].quantity,
    total: items[0].total,
  })
  
}
console.log(items);

</script>

<style scoped>
</style>
