<template>
  <van-row justify="space-between">
    <van-col span="3" class="col1">
      <Sidebar/>
    </van-col>
    <van-col span="21" class="col">span: 6</van-col>
  </van-row>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from './sidebar.vue';
const title = ref('Hello')
const title1 = ref('Hello1')
</script>

<style>
/* .col1{
  background: #000;
} */
.col{
  background: #ccc;
}
</style>
