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

import { logger } from '@/utils/log4js';
logger.debug("Some debug messages");

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
