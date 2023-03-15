<template>
  <van-row justify="space-between">
    <van-col span="8"  class="counter">
        <van-row class="order" justify="space-between">
          <Product/>
        </van-row>
        <van-row class="input" justify="space-between">
          <Input/>
        </van-row>
    </van-col>
    <van-col span="16" class="other">其他信息显示</van-col>
  </van-row>
</template>
<script setup lang="ts">
import Input from './input.vue';
import Product from './product.vue';

</script>

<style scoped>
.counter{
  height: 100vh;
}

.counter .order{
  background: #F56C6C;
  height: 93vh;
}
.counter .input{
  background: #909399;
  height: 7vh;
}

.other{
  background: #E6A23C;
}
</style>
