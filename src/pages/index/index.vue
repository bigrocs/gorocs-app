<!--
 * @Author: BigRocs
 * @Date: 2023-06-23 17:31:08
 * @LastEditTime: 2023-06-24 15:27:09
 * @LastEditors: BigRocs
 * @Description: QQ: 532388887, Email:bigrocs@qq.com
-->
<template>
  <van-row justify="space-between">
    <van-col span="3" class="col1">
      <Sidebar @ChangeSidebar="handleChangeSidebar"/>
    </van-col>
    <van-col span="21" class="col">
        <Counter v-if="sidebarKey==='counter'"/>
        <Order v-if="sidebarKey === 'order'"/>
        <PayOrder v-if="sidebarKey === 'payOrder'"/>
        <System v-if="sidebarKey === 'system'"/>
        <User v-if="sidebarKey === 'user'"/>
    </van-col>
  </van-row>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from './sidebar.vue';
import Counter from '@/pages/counter/index.vue';
import Order from '@/pages/order/index.vue';
import PayOrder from '@/pages/payOrder/index.vue';
import System from '@/pages/system/index.vue';
import User from '@/pages/user/index.vue';

import logx from '@/utils/logx';
logx.info("init app");

const sidebarKey = ref('counter')
function handleChangeSidebar(key:string) {
  sidebarKey.value = key
}
</script>

<style scss>
/* .col1{
  background: #000;
} */
.col{
  background: #ccc;
}
</style>
