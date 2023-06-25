<template>
  <van-list
    finished-text="没有更多了"
    :finished="true"
  >
    <van-cell v-for="(item,key) in items" :key="key" :title="item.name" />
  </van-list>
</template>
<script setup lang="ts">
import type { Product } from '@/types/order'
const items: Product[] = [
]
// for (let index = 0; index < 10; index++) {
//   items.push({
//     id: index,
//     plu: items[0].plu,
//     barcode: items[0].barcode,
//     name: items[0].name+ index,
//     price: items[0].price,
//     quantity: items[0].quantity,
//     subtotal: items[0].subtotal,
//     snapshotId: items[0].snapshotId,
//   })
  
// }
console.log(items);

</script>

<style scoped>
</style>
