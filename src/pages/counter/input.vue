<!--
 * @Author: BigRocs
 * @Date: 2023-06-23 17:31:08
 * @LastEditTime: 2023-06-24 21:54:36
 * @LastEditors: BigRocs
 * @Description: QQ: 532388887, Email:bigrocs@qq.com
-->
<template>
    <van-config-provider :theme-vars="themeVars" class="provider">
        <van-cell-group inset class="cell">
            <van-field 
                v-model="number" 
                type="number" 
                left-icon="home-o"
                label="键盘" 
                size="large" 
                placeholder="请输入条形码/PLU/商品名称"
                @keyup.enter="handerInput"
            />
        </van-cell-group>
    </van-config-provider>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useProductStore } from '@/store/modules/product'
import barcode from '@/utils/barcode'
import logx from '@/utils/logx';
import type { Product } from '@/types/product'
const storeProduct = useProductStore()

const themeVars = reactive({
    fieldLabelWidth: '2.5vw',
});
const number = ref()
const handerInput = (value:any) => {
    
    let product:Product | undefined
    // 校验是否是条形码
    if (barcode.isBarcodeValid(number.value)) {
        logx.info("条形码", number.value)
        product = storeProduct.filterByBarcode(number.value)
    }else{
        logx.info("PLU", number.value)
        product = storeProduct.filterByPlu(number.value)
    }
    logx.info("product", product)
}
</script>

<style scoped>
.provider {
    width: 100%;
}
.cell {
    margin: 10px;
}
</style>
